import { CourseModel } from "./courseModel";
import { RecentGradeModel } from "./recentGradeModel";

export interface CourseGradeModel {
  courseModel: CourseModel;
  recentGrades: Array<RecentGradeModel>;
  grade: number;
}
