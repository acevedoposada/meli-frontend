import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';

export const useSearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initial = new URLSearchParams(location.search).get('search');

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: { search: initial },
    onSubmit({ search }) {
      navigate(`/items?search=${search}`);
    },
  });

  return { values, handleChange, handleBlur, handleSubmit };
};
