import { Courses } from '../../../both/collections/courses.collection';
import { Course } from '../../../both/models/course.model';
/*
Populating the database with the data following the interface
*/
export function loadCourses() {
  if (Courses.find().cursor.count() === 0) {
    const courses: Course[] = [{
      units: '3',
      label: 'CS-320',
    name: 'Programming Languages',
    importance: 'Required',
    status: 'Taken'
  },
  {
    units: '3',
    label: 'CS-530',
    name: 'Systems Programing',
    importance: 'Required',
    status: ' Not Taken'
  },
  {
    units: '3',
    label: 'CS-514',
    name: 'Database Theory Implementation',
    importance: 'Elective',
    status: 'Taken'
  },
  {
    units: '3',
    label: 'CS-496',
    name: 'Datastructures for Engineers',
    importance: 'Not allowed',
    status: ' Not Taken'
  },
  {
    units: '3',
    label: 'CS-470',
    name: 'Unix Administration',
    importance: 'Elective',
    status: ' Not Taken'
  },
  {
    units: '3',
    label: 'STAT-550',
    name: 'Probability',
    importance: 'Elective',
    status: 'Taken'
  },
  {
    units: '3',
    label: 'MATH-245',
    name: 'Discrete Math',
    importance: 'Required',
    status: 'Taken'
  },
  {
    units: '3',
    label: 'TFM-100',
    name: 'Introduction to Theater',
    importance: 'General Education',
    status: 'Taken'
  },
  {
    units: '3',
    label: 'TFM-363',
    name: 'International Cinema',
    importance: 'General Education',
    status: ' Not Taken'
  },
  {
    units: '3',
    label: 'CS-570',
    name: 'Operating Systems',
    importance: 'Required',
    status: ' Not Taken'
  }];

    courses.forEach((course: Course) => Courses.insert(course));
  }
}