import create from 'zustand';

const formatDate = (date) => {
    const localDate = new Date(date); // Assuming 'date' is in UTC format or any other valid format
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

//   const today = formatDate(new Date());

const useApodStore = create((set) => ({
  result: null,
  results2: [],
  results3: [],
  date: formatDate(new Date()),
  count: '',
  startDate: '',
  endDate: '',
  setDate: (newDate) => set({ date: newDate }),
  setCount: (newCount) => set({ count: newCount }),
  setStartDate: (newStartDate) => set({ startDate: newStartDate }),
  setEndDate: (newEndDate) => set({ endDate: newEndDate }),
  fetchByDate: async (date) => {
    try {
      const response = await fetch(`/nasa/apod?date=${date}`);
      const data = await response.json();
      set({ result: data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  fetchByCount: async (count) => {
    try {
      const response = await fetch(`/nasa/apods?count=${count}`);
      const data = await response.json();
      set({ results2: data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  fetchByDateRange: async (startDate, endDate) => {
    try {
      const response = await fetch(`/nasa/apods?start_date=${startDate}&end_date=${endDate}`);
      const data = await response.json();
      set({ results3: data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export default useApodStore;
