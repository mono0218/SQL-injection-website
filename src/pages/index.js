import { useForm } from "react-hook-form";
import axios from 'axios';
import styles from '../styles/index.module.css'
import { Card ,Input,Spacer} from '@nextui-org/react';

export default function LoginPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {
    const res = await axios.post('/api/login', data);
    if(res.data.success === true){
      alert('ログインに成功しました\n')
    }else if (res.data.success === false && res.data.error === false) {
      alert('ログインに失敗しました')
    } else {
      alert('サーバーエラーが発生しました')
    }
  }
  return (
    <div className={styles.body} >
      <Card className={styles.card} css={{ mw: "400px" }}>
          <h1>Login Page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("name",{ required: true })} />
            <Spacer y={2.5} />
            <Input {...register("pass", { required: true })} />
            <Spacer y={2.5} />
            <Input type="submit" />
        </form>
      </Card>
    </div>
  );
}
