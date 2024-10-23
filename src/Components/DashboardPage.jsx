import React, { useEffect, useState, Suspense, lazy } from 'react';
import Get_user_data from '../services/api/auth/Get_user_data'; // Adjust import path if needed
import Layout from './Layout';

// Lazy-load components
// const StatsSection = lazy(() => import('./StatsSection'));
const HeroSection = lazy(() => import('./HeroSection'));
// const Profilebar = lazy(() => import('./Profilebar'));
const CoreSol = lazy(() => import('./CoreSol'));

export default function DashboardPage() {
  const [user1, setUser1] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await Get_user_data();
        setUser1(user);
      } catch (err) {
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* const stats = [
    ["Chapters Completed", "8/10"],
    ["Chapters in Progress", "2/10"],
    ["Upcoming test", "2-10-2024"],
  ]; */

  return (
    <Layout>
    <div className="flex flex-col md:flex-row w-full h-full">
      <main className="flex-1 p-2 overflow-y-auto">
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        
        {!loading && !error && (
          <Suspense fallback={<div>Loading CoreSol...</div>}>
            <CoreSol />
          </Suspense>
        )}
        
        <Suspense fallback={<div>Loading Hero Section...</div>}>
          <HeroSection />
        </Suspense>
        
        {/* <Suspense fallback={<div>Loading Stats Section...</div>}>
          <StatsSection stats={stats} />
        </Suspense> */}
      </main>

      {user1 && (
        <Suspense fallback={<div>Loading Profilebar...</div>}>
          {/* <Profilebar user={user1} stats={stats} /> */}
        </Suspense>
      )}
    </div>
    </Layout>
  );
}
