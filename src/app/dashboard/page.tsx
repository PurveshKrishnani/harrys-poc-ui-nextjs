export default function Dashboard() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-lg shadow-md">
                    <h3 className="text-lg">New Calls</h3>
                    <p className="text-2xl font-bold">256</p>
                    <p>+15.03%</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-lg shadow-md">
                    <h3 className="text-lg">Active Calls</h3>
                    <p className="text-2xl font-bold">56</p>
                    <p>-0.03%</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg shadow-md">
                    <h3 className="text-lg">Pending Calls</h3>
                    <p className="text-2xl font-bold">67</p>
                    <p>+11.01%</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-lg shadow-md">
                    <h3 className="text-lg">Rejected Calls</h3>
                    <p className="text-2xl font-bold">07</p>
                    <p>-2.03%</p>
                </div>
            </div>
  );
}
