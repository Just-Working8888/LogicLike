import { useCallback, useEffect, useMemo, useState } from 'react';
import './scss/App.scss';
import SideBar from './components/SideBar/SideBar';
import { ICourse } from './types/ICourse';
import Card from './components/Card/Card';
import { api } from './api/index';

function App() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const getCourses = useCallback(async () => {
    try {
      const response = await api.getCourses();
      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses", error);
    }
  }, []);

  useEffect(() => {
    getCourses()
  }, []);

  useEffect(() => {
    const allTags: string[] = Array.from(new Set(courses.flatMap(course => course.tags)));
    setTags(['Все темы', ...allTags])
  }, [courses])

  const filteredCourses = useMemo(() =>
    selectedTag === 'Все темы' ? courses :
      selectedTag ? courses.filter(course => course.tags.includes(selectedTag)) : courses,
    [selectedTag, courses]
  );

  return (
    <div className="App">
      <SideBar
        tags={tags}
        setCurentTags={setSelectedTag}
        curentTags={selectedTag}
      />
      <div className='App_container'>
        {filteredCourses.map((item: ICourse) => <Card courses={item} />)}
      </div>
    </div>
  );
}

export default App;
