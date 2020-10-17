import React from "react";
import { useSelector } from "react-redux";
import { selectIsFetching } from "../app/appActions";
import SpinnerView from "../../views/spinner/Spinner.view";

interface Props {}

function SpinnerFeature(props: Props) {
  const isFetching = useSelector(selectIsFetching);
  const loadingMessages = [
    "Hemen geliyor",
    "Tazeden gelsin",
    "Ailecek yukluyoruz",
    "Sayfa bizden, okumak sizden",
    "Aaa negezel yukluyo",
  ];

  const loadingMessage =
    loadingMessages[Math.floor(Math.random() * (loadingMessages.length - 1))] +
    "...";

  return (
    <SpinnerView
      {...{
        display: isFetching ? "grid" : "none",
        loadingMessage,
      }}
    />
  );
}

export default SpinnerFeature;
