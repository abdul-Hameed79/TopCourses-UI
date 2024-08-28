import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Spinner from "./Spinner";

const CourseList = ({ category }) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://codehelp-apis.vercel.app/api/get-top-courses'); // Example API endpoint
                const result = await response.json();
                setCourses(result.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
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

    const getCourses = () => {
        if (category === "All") {
            return Object.values(courses).flat();
        }
        return courses[category] || [];
    };

    const courseList = getCourses();

    return (
        <div className="container mx-auto p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseList.length > 0 ? (
                courseList.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))
            ) : (
                <div className="col-span-full mt-40 text-center text-white text-lg h-screen">
                    No courses found for the selected category...
                </div>
            )}
        </div>
    );
};

export default CourseList;
