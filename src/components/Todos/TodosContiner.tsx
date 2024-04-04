import { useAppSelector } from "../Redux/hook";
import Modal from "./Modal";
import TodoCard from "./TodoCard";

const TodosContiner = () => {
  const { todos } = useAppSelector((state) => state.todo);
  // console.log(todos);
  return (
    <div>
      <div className="flex justify-between my-5">
        <Modal
          type={"add"}
          todo={{
            id: "",
            description: "",
            task: "",
            piority: "",
          }}
        ></Modal>
      </div>
      <div className="w-full h-full bg-primary-gradiant p-[5px] rounded-lg">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.map((items) => (
            <TodoCard {...items}></TodoCard>
          ))}
        </div>
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center">
          <p>There is no task panding</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodosContiner;
