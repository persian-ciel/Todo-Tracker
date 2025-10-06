import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TodoItem({ item, isDark, onToggle }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center mb-2 py-3 px-10 border-b border-neutral-400 cursor-grab active:cursor-grabbing"
    >
      <div className="relative mr-5">
        <label
          htmlFor={`checkbox-${item.id}`}
          className="relative flex size-5 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] p-[2px] duration-100 hover:p-1"
        >
          <input
            type="checkbox"
            className="peer hidden"
            id={`checkbox-${item.id}`}
            checked={item.completed}
            onChange={() => onToggle(item.id)}
          />

          <label
            htmlFor={`checkbox-${item.id}`}
            className={`size-full rounded-full ${
              isDark ? "bg-[#363062]" : "bg-white"
            } peer-checked:size-0`}
          ></label>

          <div className="absolute inset-0 flex items-center justify-center scale-0 duration-200 peer-checked:scale-100">
            <div className="relative w-2 h-3">
              <div className="absolute h-[2px] w-2 bg-white rotate-[-45deg] top-[5px] left-0.5"></div>
              <div className="absolute h-[2px] w-1 bg-white rotate-[45deg] top-[6px] left-[0px]"></div>
            </div>
          </div>
        </label>
      </div>

      <label
        htmlFor={`checkbox-${item.id}`}
        className={`${
          isDark ? "text-neutral-200" : "text-neutral-800"
        } text-sm select-none cursor-pointer ${
          item.completed ? "opacity-50 line-through" : ""
        }`}
      >
        {item.job}
      </label>
    </div>
  );
}

export default TodoItem;