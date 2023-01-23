import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

export const useSearchBar = () => {
  const navigate = useNavigate();

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: { search: '' },
    onSubmit({ search }) {
      navigate(`/items?search=${search}`);
    },
  });

  return { values, handleChange, handleBlur, handleSubmit };
};
