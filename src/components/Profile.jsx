const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-zinc-900 text-white">
      <div className="flex flex-col md:flex-row items-start gap-10">
        
        {/* IIT Roorkee Image - Bigger */}
        <img
          src="/images/iitr.webp"
          alt="IIT Roorkee"
          className="w-full md:w-[700px] h-auto rounded-lg shadow-xl"
        />

        {/* Info Section */}
        <div className="text-left space-y-4">
          <h1 className="text-3xl font-extrabold">ARYAN BODKE</h1>
          <h2 className="text-2xl font-bold">Institute: INDIAN INSTITUTE OF TECHNOLOGY ROORKEE, INDIA</h2>
          <h3 className="text-xl font-semibold">Branch: INTEGRATED MTECH IN GEOPHYSICAL TECHNOLOGY (3RD YR)</h3>
          <p className="text-lg">DEPARTMENT: EARTH SCIENCES</p>
          <p className="text-lg">
            Interested in: Web Dev, COMPETITIVE PROGRAMMING, SEDIMENTOLOGY, AI/ML, OPEN SOURCE DEV
          </p>
          <p className="text-lg">EMAIL-ID: aryanbodke99@gmail.com</p>
          <p className="text-lg">GRADE: 8.6</p>
          <p className="text-lg">ACTIVITIES AND SOCIETIES: FOOTBALL TEAM, IITR</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
