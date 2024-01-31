import { ResumeListingData } from "@app/components/ResumeListing/types";

export interface ResumeListingResponse {
  count: number;
  resumes: ResumeListingData[];
}
