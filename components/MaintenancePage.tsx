function MaintenancePage() {
  return (
    <div className="maintenance-page bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <iframe src="https://lottie.host/embed/f4effde0-30b0-4294-b93c-00370585d40a/rG1H3si2ag.lottie"></iframe>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Under Maintenance
      </h1>
      <p className="text-xl text-gray-600 mb-8">Be back online soon!</p>
      <p className="text-lg text-gray-500">
        Estimated time until completion:{" "}
        <b>I'm not working on this currently.</b>
      </p>
    </div>
  );
}

export default MaintenancePage;
