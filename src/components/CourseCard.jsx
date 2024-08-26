import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const CourseCard = ({course}) => {
    const [liked, setLiked] = useState([]);

    function HandlerToast() {
        if(liked.includes(course.id)) {
            setLiked(liked.filter((cid) => cid !== course.id));
            toast.warning("Like Removed");
            
        } else {
            setLiked([...liked, course.id]);
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="bg-slate-800 rounded-lg p-2 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black flex-wrap">
            <div>
                <div className="relative">
                    <img src={course.image.url} alt={course.title} className="rounded-md object-cover"/>
                    <button 
                        className="absolute w-7 h-7 bg-white rounded-full right-2 top-32 grid place-items-center flex-wrap"
                        onClick={HandlerToast}>
                            {liked.includes(course.id) ?  <FcLike fontSize="1.3rem"/> : <FcLikePlaceholder fontSize="1.3rem"/> }
                    </button>
                </div>
                <h1 className="text-white font-medium text-lg mb-2"> {course.title}  </h1>
                <p className="text-white "> 
                    {course.description.length > 100 ? 
                     course.description.substr(0, 100) + "..." :
                     course.description}
                </p>
            </div>
        </div>
    )
}

export default CourseCard;