import '../main.css';
import { UserForm } from '../components/form/form';
import { Header } from '../components/header';

const title = '✨Let us know about you!✨';

export default function App() {
  return (
    <div>
      <Header title={title}></Header>
      <UserForm></UserForm>
    </div>
  );
}
