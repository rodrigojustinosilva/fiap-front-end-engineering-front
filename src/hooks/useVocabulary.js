import { useState, useEffect } from 'react';
import { fetchVocabulary } from '../services/api';
import { saveVocabularyHistory } from '../utils/localStorage';

export const useVocabulary = () => {
  const [vocabulary, setVocabulary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadVocabulary = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchVocabulary();
      setVocabulary(data);
      saveVocabularyHistory(data);
    } catch (err) {
      setError(err.message);
      setVocabulary([]);
    } finally {
      setLoading(false);
    }
  };

  return { vocabulary, loading, error, loadVocabulary };
};