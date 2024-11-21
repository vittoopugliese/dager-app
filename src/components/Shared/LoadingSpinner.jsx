export const LoadingSpinner = ({size}) => {
  return (
    <img
      alt="preloadImg"
      draggable="false"
      className="loading-spinner"
      style={{width: `${size}em`, height: `${size}em`, borderRadius: "100%"}}
      src="./avatar.png"
    />
  );
};
