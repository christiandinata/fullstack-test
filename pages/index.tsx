import {  useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to '/octocat' when the component mounts
    router.push('/octocat');
  }, []);

  return null; // This component can be empty or contain content for /octocat
};

export default HomePage;