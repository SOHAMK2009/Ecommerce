import { useStore } from '../context/StoreContext';

function Toast() {
  const { toast } = useStore();
  if (!toast) return null;

  return (
    <div className={`toast toast--${toast.type}`} role="status">
      {toast.message}
    </div>
  );
}

export default Toast;
