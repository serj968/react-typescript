import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  forwardRef,
  useImperativeHandle
} from 'react';

export type FormHandle = {
  clear: () => void;
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form({ 
  onSave, 
  ...props },
  ref) {

  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear(): void {
        console.log("Clearing form...");
        form.current!.reset();
      }
    }
  });
  


  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...props} ref={form}>
      {props.children}
    </form>
  );
})

export default Form;
