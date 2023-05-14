import { useForm } from "react-hook-form";
import axios from 'axios';

export default function LoginPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {
    const res = await axios.post('/api/login', data);
    if(res.status===500){
      alert('SQL接続時にエラーが発生しました');
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input  {...register("name",{ required: true })} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("pass", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    </div>
  );
}
