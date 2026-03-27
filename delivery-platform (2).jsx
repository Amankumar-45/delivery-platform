import React, { useState, useEffect } from 'react';
import { 
  Package, MapPin, DollarSign, Shield, Star, TrendingUp, 
  Phone, Mail, Clock, Check, AlertCircle, Menu, X,
  ArrowRight, Eye, EyeOff, Bell, Settings, LogOut, Home,
  Users, BarChart3, Flag, MessageSquare, Truck, Grid3X3
} from 'lucide-react';

export default function DeliveryPlatform() {
  const [userType, setUserType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard');
  const [parcels, setParcels] = useState([
    { id: 1, from: 'Mumbai', to: 'Bangalore', weight: '2kg', price: 299, status: 'delivered', traveler: 'Raj Kumar', rating: 4.8, timestamp: '2 hours ago' },
    { id: 2, from: 'Delhi', to: 'Noida', weight: '1.5kg', price: 149, status: 'in-transit', traveler: 'Priya Singh', rating: 4.9, timestamp: 'Now' },
    { id: 3, from: 'Bangalore', to: 'Hyderabad', weight: '3kg', price: 399, status: 'pending', traveler: null, rating: null, timestamp: '30 mins ago' },
  ]);
  const [newParcel, setNewParcel] = useState({ from: '', to: '', weight: '', description: '', price: '' });
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const senderStats = [
    { label: 'Total Parcels Sent', value: '24', icon: '📦', color: 'from-blue-500 to-cyan-500' },
    { label: 'Average Rating', value: '4.8', icon: '⭐', color: 'from-amber-500 to-orange-500' },
    { label: 'Money Saved', value: '₹3,240', icon: '💰', color: 'from-green-500 to-emerald-500' },
    { label: 'Active Deliveries', value: '2', icon: '🚗', color: 'from-purple-500 to-pink-500' },
  ];

  const travelerStats = [
    { label: 'Total Deliveries', value: '156', icon: '🎯', color: 'from-blue-500 to-cyan-500' },
    { label: 'Earnings', value: '₹18,450', icon: '💵', color: 'from-green-500 to-emerald-500' },
    { label: 'Completion Rate', value: '98.5%', icon: '✅', color: 'from-amber-500 to-orange-500' },
    { label: 'Active Routes', value: '3', icon: '🗺️', color: 'from-purple-500 to-pink-500' },
  ];

  const adminStats = [
    { label: 'Total Users', value: '12.5K', icon: '👥', color: 'from-blue-500 to-cyan-500' },
    { label: 'Active Deliveries', value: '847', icon: '📦', color: 'from-green-500 to-emerald-500' },
    { label: 'Platform Revenue', value: '₹2.4L', icon: '💹', color: 'from-amber-500 to-orange-500' },
    { label: 'Disputes Resolved', value: '98%', icon: '⚖️', color: 'from-purple-500 to-pink-500' },
  ];

  const handleLogin = (type) => {
    setUserType(type);
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setCurrentView('dashboard');
  };

  const acceptParcel = (id) => {
    setParcels(parcels.map(p => p.id === id ? { ...p, status: 'accepted', traveler: 'You' } : p));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <style>{`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
          .animate-slide-up { animation: slideUp 0.6s ease-out forwards; }
          .glow-blue { box-shadow: 0 0 30px rgba(59, 130, 246, 0.3); }
          .glow-green { box-shadow: 0 0 30px rgba(16, 185, 129, 0.3); }
        `}</style>

        <div className="max-w-5xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Brand */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Truck className="text-slate-900" size={28} />
                  </div>
                  <span className="text-3xl font-bold text-white">DeliverHub</span>
                </div>
                <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                  Ship Smarter, Travel Better
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Connect with travelers heading your way. Secure, affordable, eco-friendly delivery at your doorstep.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Shield className="text-green-400 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-white">Fully Secure</h3>
                      <p className="text-blue-200">OTP verification, GPS tracking, escrow payments</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <TrendingUp className="text-green-400 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-white">Cost-Effective</h3>
                      <p className="text-blue-200">Save up to 70% on delivery costs</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Globe className="text-green-400 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-white">Eco-Friendly</h3>
                      <p className="text-blue-200">Reduce carbon footprint with shared routes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Options */}
            <div className="space-y-6 animate-slide-up">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-8">Login As</h2>

                <button
                  onClick={() => handleLogin('sender')}
                  className="w-full mb-4 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 glow-blue"
                >
                  <Package className="inline mr-2" size={20} />
                  Sender / Customer
                </button>

                <button
                  onClick={() => handleLogin('traveler')}
                  className="w-full mb-4 p-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 glow-green"
                >
                  <Truck className="inline mr-2" size={20} />
                  Traveler / Delivery Partner
                </button>

                <button
                  onClick={() => handleLogin('admin')}
                  className="w-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
                  style={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
                >
                  <BarChart3 className="inline mr-2" size={20} />
                  Admin / Platform Manager
                </button>

                <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-blue-200 text-sm">
                    <Shield className="inline mr-2" size={16} />
                    Demo credentials included. No real data collected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SENDER DASHBOARD
  if (userType === 'sender') {
    return (
      <div className="min-h-screen bg-slate-50">
        <style>{`
          @keyframes slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          .animate-slide-in { animation: slideIn 0.3s ease-out; }
          .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        `}</style>

        {/* Header */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
          <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg">
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Truck className="text-blue-600" size={32} />
              <h1 className="text-2xl font-bold text-slate-900">DeliverHub</h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="relative p-2 hover:bg-slate-100 rounded-lg">
                <Bell size={24} className="text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-lg text-slate-600">
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          {sidebarOpen && (
            <div className="w-64 bg-white border-r border-slate-200 p-6 animate-slide-in">
              <nav className="space-y-2">
                <button onClick={() => setCurrentView('dashboard')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'dashboard' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Home size={20} /> Dashboard
                </button>
                <button onClick={() => setCurrentView('send')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'send' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Package size={20} /> Send Parcel
                </button>
                <button onClick={() => setCurrentView('tracking')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'tracking' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <MapPin size={20} /> Track & History
                </button>
                <button onClick={() => setCurrentView('wallet')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'wallet' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <DollarSign size={20} /> Wallet & Payments
                </button>
                <button onClick={() => setCurrentView('help')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'help' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <MessageSquare size={20} /> Support
                </button>
              </nav>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Dashboard View */}
            {currentView === 'dashboard' && (
              <div className="animate-fade-in">
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-2">Welcome Back, Rahul! 👋</h2>
                  <p className="text-slate-600">Your delivery summary and quick stats</p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  {senderStats.map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{stat.icon}</div>
                      <p className="text-slate-600 text-sm mb-2">{stat.label}</p>
                      <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Parcels */}
                <div className="bg-white rounded-xl border border-slate-200 p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Recent Parcels</h3>
                  <div className="space-y-4">
                    {parcels.slice(0, 3).map(parcel => (
                      <div key={parcel.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Package className="text-blue-600" size={24} />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">{parcel.from} → {parcel.to}</p>
                              <p className="text-sm text-slate-600">{parcel.weight} • {parcel.timestamp}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div>
                            <p className="text-sm text-slate-600">Traveler</p>
                            <p className="font-semibold text-slate-900">{parcel.traveler || 'Pending'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-600">Status</p>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${parcel.status === 'delivered' ? 'bg-green-100 text-green-700' : parcel.status === 'in-transit' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                              {parcel.status.charAt(0).toUpperCase() + parcel.status.slice(1)}
                            </span>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-slate-600">Price</p>
                            <p className="font-bold text-slate-900">₹{parcel.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Send Parcel View */}
            {currentView === 'send' && (
              <div className="animate-fade-in max-w-2xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Send a Parcel</h2>
                <div className="bg-white rounded-xl border border-slate-200 p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">From Location</label>
                        <input type="text" placeholder="Enter pickup location" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">To Location</label>
                        <input type="text" placeholder="Enter delivery location" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">Weight (kg)</label>
                        <input type="number" placeholder="2" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">Expected Price (₹)</label>
                        <input type="number" placeholder="299" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Description</label>
                      <textarea placeholder="Describe your parcel (fragile, temperature-sensitive, etc.)" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"></textarea>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-900">
                        <Shield className="inline mr-2" size={16} />
                        Your parcel is protected with OTP-based delivery and GPS tracking
                      </p>
                    </div>

                    <button type="button" onClick={() => setShowNotification(true)} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all">
                      Post Parcel
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Tracking View */}
            {currentView === 'tracking' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Track Your Parcels</h2>
                <div className="space-y-6">
                  {parcels.map(parcel => (
                    <div key={parcel.id} className="bg-white rounded-xl border border-slate-200 p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{parcel.from} → {parcel.to}</h3>
                          <p className="text-slate-600">{parcel.weight} package • Posted {parcel.timestamp}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-full font-semibold ${parcel.status === 'delivered' ? 'bg-green-100 text-green-700' : parcel.status === 'in-transit' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {parcel.status.toUpperCase()}
                        </span>
                      </div>

                      <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Truck className="text-blue-600" size={24} />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{parcel.traveler || 'Waiting for traveler'}</p>
                            {parcel.rating && <p className="text-sm text-amber-600">⭐ {parcel.rating}</p>}
                          </div>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <div className="w-0.5 h-12 bg-green-200 mt-2"></div>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">Pickup Confirmed</p>
                            <p className="text-sm text-slate-600">Package picked up with OTP verification</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-4 h-4 rounded-full ${parcel.status === 'in-transit' || parcel.status === 'delivered' ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                            <div className={`w-0.5 h-12 ${parcel.status === 'in-transit' || parcel.status === 'delivered' ? 'bg-green-200' : 'bg-slate-200'} mt-2`}></div>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">In Transit</p>
                            <p className="text-sm text-slate-600">GPS tracked in real-time</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-4 h-4 rounded-full ${parcel.status === 'delivered' ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">Delivered</p>
                            <p className="text-sm text-slate-600">Open-box inspection & confirmation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wallet View */}
            {currentView === 'wallet' && (
              <div className="animate-fade-in max-w-2xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Wallet & Payments</h2>
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white mb-8">
                  <p className="text-blue-100 mb-2">Available Balance</p>
                  <p className="text-4xl font-bold mb-4">₹2,450</p>
                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">Add Money</button>
                    <button className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">Withdraw</button>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Payment History</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-slate-900">Parcel Delivery - Mumbai to Bangalore</p>
                        <p className="text-sm text-slate-600">2 hours ago</p>
                      </div>
                      <p className="text-lg font-bold text-green-600">-₹299</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Notification */}
        {showNotification && (
          <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
            <Check size={20} />
            Action completed successfully!
          </div>
        )}
      </div>
    );
  }

  // TRAVELER DASHBOARD
  if (userType === 'traveler') {
    return (
      <div className="min-h-screen bg-slate-50">
        <style>{`
          @keyframes slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          .animate-slide-in { animation: slideIn 0.3s ease-out; }
          .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        `}</style>

        {/* Header */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
          <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg">
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Truck className="text-green-600" size={32} />
              <h1 className="text-2xl font-bold text-slate-900">DeliverHub</h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="relative p-2 hover:bg-slate-100 rounded-lg">
                <Bell size={24} className="text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-lg text-slate-600">
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          {sidebarOpen && (
            <div className="w-64 bg-white border-r border-slate-200 p-6 animate-slide-in">
              <nav className="space-y-2">
                <button onClick={() => setCurrentView('dashboard')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'dashboard' ? 'bg-green-50 text-green-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Home size={20} /> Dashboard
                </button>
                <button onClick={() => setCurrentView('available')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'available' ? 'bg-green-50 text-green-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Grid3X3 size={20} /> Available Parcels
                </button>
                <button onClick={() => setCurrentView('active')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'active' ? 'bg-green-50 text-green-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <MapPin size={20} /> Active Deliveries
                </button>
                <button onClick={() => setCurrentView('earnings')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'earnings' ? 'bg-green-50 text-green-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <DollarSign size={20} /> Earnings
                </button>
                <button onClick={() => setCurrentView('profile')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'profile' ? 'bg-green-50 text-green-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Users size={20} /> Profile & Ratings
                </button>
              </nav>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Dashboard View */}
            {currentView === 'dashboard' && (
              <div className="animate-fade-in">
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-2">Welcome Back, Priya! 👋</h2>
                  <p className="text-slate-600">You're on track to earn ₹2,500 this week</p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  {travelerStats.map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{stat.icon}</div>
                      <p className="text-slate-600 text-sm mb-2">{stat.label}</p>
                      <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                    <MapPin className="text-green-600 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Available Parcels</h3>
                    <p className="text-slate-600 mb-4">12 parcels waiting on your route</p>
                    <button onClick={() => setCurrentView('available')} className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-2">
                      View All <ArrowRight size={20} />
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
                    <Truck className="text-blue-600 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Active Route</h3>
                    <p className="text-slate-600 mb-4">Delhi → Gurgaon (3 parcels)</p>
                    <button onClick={() => setCurrentView('active')} className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                      Track <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Available Parcels */}
            {currentView === 'available' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Available Parcels on Your Route</h2>
                <div className="space-y-6">
                  {parcels.filter(p => p.status === 'pending').map(parcel => (
                    <div key={parcel.id} className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{parcel.from} → {parcel.to}</h3>
                          <div className="flex flex-wrap gap-4 text-slate-600">
                            <span className="flex items-center gap-2"><Package size={18} /> {parcel.weight}</span>
                            <span className="flex items-center gap-2"><DollarSign size={18} /> ₹{parcel.price}</span>
                            <span className="flex items-center gap-2"><Clock size={18} /> {parcel.timestamp}</span>
                          </div>
                        </div>
                        <button onClick={() => acceptParcel(parcel.id)} className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all">
                          Accept Parcel
                        </button>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-sm text-green-900">
                          <Check className="inline mr-2" size={16} />
                          9.2 km detour • Minimal route deviation • Earn ₹{parcel.price} + Rewards
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Active Deliveries */}
            {currentView === 'active' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Active Deliveries</h2>
                <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Live GPS Tracking</h3>
                  <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center mb-4">
                    <p className="text-slate-600">🗺️ Live map view showing your current route</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-sm text-slate-600">Distance Covered</p>
                      <p className="text-2xl font-bold text-slate-900">12.5 km</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-sm text-slate-600">Estimated Time</p>
                      <p className="text-2xl font-bold text-slate-900">32 min</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-sm text-slate-600">Parcels Delivered</p>
                      <p className="text-2xl font-bold text-slate-900">2/3</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl border border-green-200 border-l-4 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Check className="text-green-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900">Mumbai → Thane</p>
                        <p className="text-sm text-slate-600">Delivered 15 mins ago with OTP</p>
                      </div>
                      <Star className="text-amber-400 fill-current" size={24} />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-blue-200 border-l-4 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Truck className="text-blue-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900">Thane → Navi Mumbai</p>
                        <p className="text-sm text-slate-600">In transit • GPS tracking active</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Earnings */}
            {currentView === 'earnings' && (
              <div className="animate-fade-in max-w-2xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Earnings & Payouts</h2>
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white mb-8">
                  <p className="text-green-100 mb-2">Total Earnings This Month</p>
                  <p className="text-4xl font-bold mb-4">₹18,450</p>
                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">Request Payout</button>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Earnings</h3>
                  <div className="space-y-4">
                    {[
                      { route: 'Mumbai → Bangalore', amount: 299, reward: 50, total: 349 },
                      { route: 'Delhi → Noida', amount: 149, reward: 20, total: 169 },
                      { route: 'Bangalore → Hyderabad', amount: 399, reward: 60, total: 459 },
                    ].map((earning, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div>
                          <p className="font-semibold text-slate-900">{earning.route}</p>
                          <p className="text-sm text-slate-600">Commission: ₹{earning.amount} + Reward: ₹{earning.reward}</p>
                        </div>
                        <p className="text-lg font-bold text-green-600">+₹{earning.total}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Profile */}
            {currentView === 'profile' && (
              <div className="animate-fade-in max-w-2xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Your Profile</h2>
                <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 text-4xl">👩</div>
                      <h3 className="text-2xl font-bold text-slate-900">Priya Singh</h3>
                      <p className="text-slate-600">Verified Traveler • Member since Jan 2024</p>
                    </div>
                    <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50">Edit Profile</button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-sm text-slate-600">Rating</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-2xl font-bold text-slate-900">4.9</span>
                        <span className="text-amber-500">⭐⭐⭐⭐⭐</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-2">156 reviews</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-sm text-slate-600">Completion Rate</p>
                      <p className="text-2xl font-bold text-slate-900 mt-2">98.5%</p>
                      <p className="text-xs text-slate-600 mt-2">154/156 completed</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-sm text-slate-600">Verification Status</p>
                      <p className="text-sm font-semibold text-green-600 mt-2 flex items-center gap-1">
                        <Check size={18} /> Verified
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Reviews</h3>
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-amber-500">⭐⭐⭐⭐⭐</span>
                        <p className="font-semibold text-slate-900">Excellent service!</p>
                      </div>
                      <p className="text-slate-600 text-sm">Very professional and delivered on time. Highly recommended!</p>
                      <p className="text-xs text-slate-500 mt-2">Rahul K. • 2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Notification */}
        {showNotification && (
          <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
            <Check size={20} />
            Parcel accepted! You earned ₹349
          </div>
        )}
      </div>
    );
  }

  // ADMIN DASHBOARD
  if (userType === 'admin') {
    return (
      <div className="min-h-screen bg-slate-50">
        <style>{`
          @keyframes slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          .animate-slide-in { animation: slideIn 0.3s ease-out; }
          .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        `}</style>

        {/* Header */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
          <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg">
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Truck className="text-purple-600" size={32} />
              <h1 className="text-2xl font-bold text-slate-900">DeliverHub Admin</h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="relative p-2 hover:bg-slate-100 rounded-lg">
                <Bell size={24} className="text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-lg text-slate-600">
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          {sidebarOpen && (
            <div className="w-64 bg-white border-r border-slate-200 p-6 animate-slide-in">
              <nav className="space-y-2">
                <button onClick={() => setCurrentView('dashboard')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'dashboard' ? 'bg-purple-50 text-purple-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <BarChart3 size={20} /> Dashboard
                </button>
                <button onClick={() => setCurrentView('users')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'users' ? 'bg-purple-50 text-purple-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Users size={20} /> Users
                </button>
                <button onClick={() => setCurrentView('deliveries')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'deliveries' ? 'bg-purple-50 text-purple-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Package size={20} /> Deliveries
                </button>
                <button onClick={() => setCurrentView('disputes')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'disputes' ? 'bg-purple-50 text-purple-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Flag size={20} /> Disputes
                </button>
                <button onClick={() => setCurrentView('analytics')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${currentView === 'analytics' ? 'bg-purple-50 text-purple-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <TrendingUp size={20} /> Analytics
                </button>
              </nav>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Dashboard View */}
            {currentView === 'dashboard' && (
              <div className="animate-fade-in">
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-2">Platform Overview</h2>
                  <p className="text-slate-600">Real-time metrics and platform health</p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  {adminStats.map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{stat.icon}</div>
                      <p className="text-slate-600 text-sm mb-2">{stat.label}</p>
                      <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8 border border-red-200">
                    <AlertCircle className="text-red-600 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Pending Disputes</h3>
                    <p className="text-slate-600 mb-4">5 active disputes needing resolution</p>
                    <button onClick={() => setCurrentView('disputes')} className="text-red-600 font-semibold hover:text-red-700 flex items-center gap-2">
                      Review <ArrowRight size={20} />
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-8 border border-yellow-200">
                    <Flag className="text-amber-600 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Issues</h3>
                    <p className="text-slate-600 mb-4">3 reports of late deliveries</p>
                    <button className="text-amber-600 font-semibold hover:text-amber-700 flex items-center gap-2">
                      View <ArrowRight size={20} />
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                    <TrendingUp className="text-green-600 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Platform Growth</h3>
                    <p className="text-slate-600 mb-4">↑ 23% growth this month</p>
                    <button onClick={() => setCurrentView('analytics')} className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-2">
                      Details <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Users Management */}
            {currentView === 'users' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">User Management</h2>
                <div className="bg-white rounded-xl border border-slate-200 p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-4 px-4 font-semibold text-slate-900">User</th>
                          <th className="text-left py-4 px-4 font-semibold text-slate-900">Type</th>
                          <th className="text-left py-4 px-4 font-semibold text-slate-900">Status</th>
                          <th className="text-left py-4 px-4 font-semibold text-slate-900">Rating</th>
                          <th className="text-left py-4 px-4 font-semibold text-slate-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Rahul Kumar', type: 'Sender', status: 'Active', rating: '4.8/5' },
                          { name: 'Priya Singh', type: 'Traveler', status: 'Active', rating: '4.9/5' },
                          { name: 'Amit Patel', type: 'Sender', status: 'Pending Verification', rating: '-' },
                          { name: 'Neha Sharma', type: 'Traveler', status: 'Suspended', rating: '2.1/5' },
                        ].map((user, idx) => (
                          <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                            <td className="py-4 px-4">{user.name}</td>
                            <td className="py-4 px-4">{user.type}</td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === 'Active' ? 'bg-green-100 text-green-700' : user.status === 'Suspended' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">{user.rating}</td>
                            <td className="py-4 px-4">
                              <button className="text-blue-600 hover:text-blue-700 font-semibold">View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Deliveries */}
            {currentView === 'deliveries' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Active Deliveries Monitor</h2>
                <div className="space-y-6">
                  {parcels.map(parcel => (
                    <div key={parcel.id} className="bg-white rounded-xl border border-slate-200 p-6 flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{parcel.from} → {parcel.to}</h3>
                        <p className="text-sm text-slate-600">{parcel.weight} • Traveler: {parcel.traveler || 'Pending'}</p>
                      </div>
                      <div className="flex items-center gap-8">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${parcel.status === 'delivered' ? 'bg-green-100 text-green-700' : parcel.status === 'in-transit' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {parcel.status.toUpperCase()}
                        </span>
                        <p className="font-bold text-slate-900">₹{parcel.price}</p>
                        <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50">Track</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Disputes */}
            {currentView === 'disputes' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Dispute & Complaint Management</h2>
                <div className="space-y-6">
                  {[
                    { id: 1, complaint: 'Package delayed by 2 hours', sender: 'Rahul Kumar', status: 'Pending', priority: 'High' },
                    { id: 2, complaint: 'Parcel arrived damaged', sender: 'Neha Sharma', status: 'Under Review', priority: 'Critical' },
                    { id: 3, complaint: 'Traveler not responsive', sender: 'Amit Patel', status: 'Resolved', priority: 'Medium' },
                  ].map(dispute => (
                    <div key={dispute.id} className="bg-white rounded-xl border border-slate-200 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-slate-900">{dispute.complaint}</h3>
                          <p className="text-sm text-slate-600">Reported by {dispute.sender}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${dispute.priority === 'Critical' ? 'bg-red-100 text-red-700' : dispute.priority === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {dispute.priority}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${dispute.status === 'Resolved' ? 'bg-green-100 text-green-700' : dispute.status === 'Under Review' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {dispute.status}
                        </span>
                        <button className="text-blue-600 hover:text-blue-700 font-semibold ml-auto">Investigate</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics */}
            {currentView === 'analytics' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Platform Analytics</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl border border-slate-200 p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Daily Deliveries Trend</h3>
                    <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center">
                      <p className="text-slate-600">📊 Growth chart: 847 active deliveries</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Revenue Breakdown</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <p className="text-slate-600">Platform Commission</p>
                          <p className="font-semibold text-slate-900">₹86,400</p>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <p className="text-slate-600">Premium Features</p>
                          <p className="font-semibold text-slate-900">₹24,000</p>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <p className="text-slate-600">Other Revenue</p>
                          <p className="font-semibold text-slate-900">₹13,600</p>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '11%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Notification */}
        {showNotification && (
          <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
            <Check size={20} />
            Action completed successfully!
          </div>
        )}
      </div>
    );
  }
}

function Globe(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path d="M2 12h20M12 2c2.7 5.1 5 8.2 5 10s-2.3 4.9-5 10c-2.7-5.1-5-8.2-5-10s2.3-4.9 5-10" strokeWidth="2" />
    </svg>
  );
}