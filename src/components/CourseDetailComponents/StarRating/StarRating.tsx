"use client";

import { useUser } from "@/context/UserContext/UserContext";
import { fetchCourseRating } from "@/services/courses/courses.service";
import React, { useState } from "react";
import { IStarRatingProps } from "./types";
import { useRouter } from "next/navigation";
import { useToken } from "@/context/TokenContext/TokenContext";
export const StarRating: React.FC<IStarRatingProps> = ({ course }) => {
  const [hover, setHover] = useState<number>(0);
  const [averageRating, setAverageRating] = useState<number>(
    course.averageRating || 0
  );
  const [totalRatings, setTotalRatings] = useState<number>(
    course.totalRatings || 0
  );
  const { user } = useUser();
  const { token } = useToken();
  const router = useRouter();

  const handleCourseRating = async (
    courseId: string,
    userId: string,
    stars: number
  ) => {
    if (token) {
      await fetchCourseRating(courseId, userId, stars, token);
      const newTotalRatings = totalRatings + 1;
      const newAverageRating = (
        (averageRating * totalRatings + stars) /
        newTotalRatings
      ).toFixed(1);

      setAverageRating(parseFloat(newAverageRating));
      setTotalRatings(newTotalRatings);
    }
  };

  return (
    <>
      <div className="flex items-center gap-1">
        <h3 className="text-xs font-medium text-darkgray transition-all group-hover:text-blackPage sm:text-[14px]">
          {averageRating.toFixed(1)}
        </h3>
        <div>
          {[1, 2, 3, 4, 5].map((star, i) => (
            <span
              className={`cursor-pointer text-xs transition-all ${
                star <= hover || star <= averageRating
                  ? "text-[#b4690e]"
                  : "text-darkgray"
              }`}
              key={star}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() =>
                token && user
                  ? handleCourseRating(course.id, user.id, i + 1)
                  : router.push("/login")
              }
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <h3 className="text-skyblue text-xs font-medium sm:text-[14px]">
        {`${totalRatings} ${
          totalRatings !== 1 ? "calificaciones" : "calificación"
        }`}
      </h3>
    </>
  );
};

export default StarRating;
