import UserProfile from "./ProfilePage";
import TodoList from "./TodoList";
import Journal from "./Journal";
import Calendar from "./userCalendar/Calendar";
const Dashboard = () => {
  return (
    <>
      <div className="user-dashboard grid  md: lg:grid-cols-12">
        <div className="Profile lg:col-span-2">
          <UserProfile />
        </div>
        <div className="TodoList lg:col-span-6 flex flex-col justify-between h-screen">
          <TodoList className="" />
          <Journal className="flex-grow overflow-y-auto" />
        </div>
        <div className="Calendar border-2 shadow-sm shadow-slate-400 lg:col-span-4">
          <Calendar />
        </div>
      </div>
      <style jsx>{`
        .todo-list {
          max-height: 33vh; /* Set a maximum height for the list */
        }
        .todo-list::-webkit-scrollbar {
          width: 0.1rem;
        }

        .todo-list::-webkit-scrollbar-track {
          background: transparent;
        }

        .todo-list::-webkit-scrollbar-thumb {
          background: black;
        }
        ::-webkit-scrollbar {
          width: 0.1rem;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: transparent;
        }
      `}</style>
    </>
  );
};

export default Dashboard;
