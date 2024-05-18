"use client";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";

import { CardsListSection } from "../components/CardsListSection/CardsListSection";
export default function Shooter() {
  const shooter = useGetDataByCategory(endpoints.games, "shooter");
  return (
    <main className="main-inner">
      {shooter ? (
        <CardsListSection id="shooter" title="Шутеры" data={shooter} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
