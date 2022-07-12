import React, { useEffect } from 'react';
import CourseItem from '../components/CourseItem';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_COURSES } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_COURSES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

function CourseList() {
    const [state, dispatch] = useStoreContext();

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_COURSES);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_COURSES,
                courses: data.courses,
            });
            data.courses.forEach((course) => {
                idbPromise('courses', 'put', course);
            });
        } else if (!loading) {
            idbPromise('courses', 'get').then((courses) => {
                dispatch({
                    type: UPDATE_COURSES,
                    courses: courses,
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterCourses() {
        if (!currentCategory) {
            return state.courses;
        }

        return state.courses.filter(
            (course) => course.category._id === currentCategory
        );
    }

    return (
        <div className="my-2">
            <h2>Our Courses:</h2>
            {state.courses.length ? (
                <div className="flex-row">
                    {filterCourses().map((course) => (
                        <CourseItem
                            key={course._id}
                            _id={course._id}
                            image={course.image}
                            name={course.name}
                            price={course.price}
                        />
                    ))}
                </div>
            ) : (
                <h3>You haven't added any courses yet!</h3>
            )}
        </div>
    );
}

export default CourseList;
