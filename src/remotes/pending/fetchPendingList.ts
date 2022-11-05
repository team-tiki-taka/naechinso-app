import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function fetchPendingList() {
  const res = await mainRequester.get<ServerResponse<PendingItemTypes[]>>(
    '/pending',
  );
  return res.data.data;
}

export type PendingItemTypes = SchoolPendingItem | JobPendingItem;

export interface SchoolPendingItem {
  type: 'EDU';
  isAccepted: boolean;
  reason: null;
  content: {
    eduImage: string;
    eduMajor: string;
    eduLevel: string;
    eduName: string;
  };
  images: string[];
  rejectImages: [];
  createdAt: string;
  updatedAt: string;
}

export interface JobPendingItem {
  type: 'JOB';
  isAccepted: boolean;
  reason: null;
  content: {
    jobName: string;
    jobLocation: string;
    jobPart: string;
    jobImage: string;
  };
  images: string[];
  rejectImages: [];
  createdAt: string;
  updatedAt: string;
}
