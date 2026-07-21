const SALES_KEY = "xmart_sales";

export const getSales = () => {
  const sales = localStorage.getItem(SALES_KEY);
  return sales ? JSON.parse(sales) : [];
};

export const saveSale = (sale) => {
  const sales = getSales();

  sales.unshift({
    id: Date.now(),
    date: new Date().toLocaleString(),
    ...sale,
  });

  localStorage.setItem(
    SALES_KEY,
    JSON.stringify(sales)
  );
};