import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
export const useFormFx = (uri, mthd, thisPage) => {
  const navigateTo = useNavigate();
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value //"Computed Property Names"
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const body = {
      username: data.username,
      email: data.email,
      phone: data.phone
    };

    try {
      const response = await fetch(uri, {
        method: mthd,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      navigateTo(thisPage);
    } catch (error) {
      console.error('Error during submission:', error);
      setError(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    setData,
    handleChange,
    handleSubmit,
    loading,
    error
  };
};

