import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Spinner from "./Spinner";

const CourseList = ({category}) => {
    const [courses, setCourses] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("https://codehelp-apis.vercel.app/api/get-top-courses");
                const output = await response.json();
                setCourses(output.data);
            } catch (error) {
                console.error("Error fetching course data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center w-full h-screen">
                <Spinner />
            </div>
        );
    }

    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return courses[category] || [];
        }
    }
    const courseList = getCourses();

    return (
        <div className="w-3/4 p-3 grid grid-cols-3 gap-6 flex-wrap mx-auto">
            {courseList.length > 0 ? (
                courseList.map( (course) => (
                    <CourseCard key={course.id} course={course} category={category} />
                ))
            ) : (
                <div className="col-span-3 justify-center items-center h-screen text-center text-white" >
                    No courses found for the selected category...
                </div>    
            )}
        </div>
    ); 
    
};

export default CourseList;
