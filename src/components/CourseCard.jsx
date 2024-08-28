import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const CourseCard = ({ course }) => {
    const [liked, setLiked] = useState([]);

    const handleToast = () => {
        if (liked.includes(course.id)) {
            setLiked(liked.filter((cid) => cid !== course.id));
            toast.warning("Like Removed");
        } else {
            setLiked([...liked, course.id]);
            toast.success("Liked Successfully");
        }
    };

    return (
        <div className="bg-slate-800 rounded-lg p-4 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black">
            <div className="relative">
                <img src={course.image.url} alt={course.title} className="w-full h-48 rounded-md object-cover flex-wrap"/>
                <button 
                    className="absolute w-8 h-8 bg-white rounded-full right-2 top-2 flex items-center justify-center flex-wrap"
                    onClick={handleToast}>
                    {liked.includes(course.id) ?  <FcLike fontSize="1.5rem"/> : <FcLikePlaceholder fontSize="1.5rem"/> }
                </button>
            </div>
            <h1 className="text-white font-medium text-lg mt-2">{course.title}</h1>
            <p className="text-white mt-2">
                {course.description.length > 100 
                    ? `${course.description.substring(0, 100)}...`
                    : course.description
                }
            </p>
        </div>
    );
}

export default CourseCard;
