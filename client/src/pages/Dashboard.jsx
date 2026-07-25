import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Users,
  UserPlus,
  PhoneCall,
  CircleCheck,
  Search,
  LogOut,
} from "lucide-react";

import api from "../services/api";
import { useAuth } from "../context/AuthContext";

function StatCard({ title, value, icon, color }) {
  return (
    <div
      className="group rounded-2xl border border-slate-800 bg-slate-900 p-6
      transition-all duration-300 hover:-translate-y-1 hover:border-blue-500
      hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wider text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">{value}</h2>
        </div>

        <div className={`rounded-xl p-4 ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const { data } = await api.get("/leads");

      setLeads(data.leads || []);
    } catch (err) {
      toast.error("Unable to load leads");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/leads/${id}`, {
        status,
      });

      setLeads((prev) =>
        prev.map((lead) =>
          lead.id === id
            ? { ...lead, status }
            : lead
        )
      );

      toast.success("Status updated");
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const filteredLeads = useMemo(() => {
    return leads.filter(
      (lead) =>
        (lead.name || "")
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        (lead.email || "")
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search, leads]);

  const total = leads.length;

  const newCount = leads.filter(
    (l) => l.status === "New"
  ).length;

  const contacted = leads.filter(
    (l) => l.status === "Contacted"
  ).length;

  const closed = leads.filter(
    (l) => l.status === "Closed"
  ).length;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="border-b border-slate-800 bg-slate-900/70 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              LeadDesk Mini
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Lead Management Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              View, search and manage all customer enquiries.
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-medium transition hover:bg-red-700"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>

      <div className="mx-auto max-w-7xl p-8">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Total Leads"
            value={total}
            icon={<Users />}
            color="bg-blue-500/10 text-blue-400"
          />

          <StatCard
            title="New"
            value={newCount}
            icon={<UserPlus />}
            color="bg-sky-500/10 text-sky-400"
          />

          <StatCard
            title="Contacted"
            value={contacted}
            icon={<PhoneCall />}
            color="bg-yellow-500/10 text-yellow-400"
          />

          <StatCard
            title="Closed"
            value={closed}
            icon={<CircleCheck />}
            color="bg-green-500/10 text-green-400"
          />

        </div>

        <div className="relative mt-10">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search leads by name or email..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500"
          />

        </div>
                {loading ? (
          <div className="flex justify-center py-24">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-16 text-center">
            <h2 className="text-3xl font-bold">
              No Leads Yet
            </h2>

            <p className="mt-3 text-slate-400">
              Submit a lead from the landing page and it will appear here instantly.
            </p>
          </div>
        ) : (
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

            <table className="w-full">

              <thead className="bg-slate-800 uppercase text-xs tracking-widest text-slate-400">

                <tr>

                  <th className="p-5 text-left">Name</th>
                  <th className="p-5 text-left">Email</th>
                  <th className="p-5 text-left">Budget</th>
                  <th className="p-5 text-left">Message</th>
                  <th className="p-5 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredLeads.map((lead) => (

                  <tr
                    key={lead.id}
                    className="border-t border-slate-800 transition hover:bg-slate-800/40"
                  >

                    <td className="p-5 font-semibold">
                      {lead.name}
                    </td>

                    <td className="p-5 text-slate-300">
                      {lead.email}
                    </td>

                    <td className="p-5">
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
                        {lead.budget}
                      </span>
                    </td>

                    <td className="max-w-sm truncate p-5 text-slate-300">
                      {lead.message}
                    </td>

                    <td className="p-5">

                      <select
                        value={lead.status}
                        onChange={(e) =>
                          updateStatus(lead.id, e.target.value)
                        }
                        className={`rounded-xl px-4 py-2 text-sm font-semibold outline-none transition ${
                          lead.status === "New"
                            ? "bg-blue-600 text-white"
                            : lead.status === "Contacted"
                            ? "bg-yellow-500 text-black"
                            : "bg-green-600 text-white"
                        }`}
                      >
                        <option value="New">
                          New
                        </option>

                        <option value="Contacted">
                          Contacted
                        </option>

                        <option value="Closed">
                          Closed
                        </option>

                      </select>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}