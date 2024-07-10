import LandingPage from '../components/LandingPage';

export default async function Landing() {
  // Fetch user data on the server side
  const user = 'User'; // Replace this with actual user fetching logic

  return <LandingPage user={user} />;
}
