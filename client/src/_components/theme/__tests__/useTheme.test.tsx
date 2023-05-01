import { useState } from "react";
import { renderHook } from "@testing-library/react";
import { useTheme } from "../utils/hooks/useTheme";
import { buildPack } from "pages/poopdeck/utils/create";

const component = buildPack({});

describe("Theme State Tests", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });

  //Field
  it("has field in state", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.themeField).toBeDefined();
  });

  it("can be passed field from props", () => {
    const { result } = renderHook(() =>
      useTheme({ themeField: { "0": component } })
    );
    expect(result.current.themeField["0"]).toBe(component);
  });
  //Routes
  it("has routes in state", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.routes).toBeDefined();
  });

  it("can be passed routes from props", () => {
    const { result } = renderHook(() =>
      useTheme({ routes: { "0": { path: "/", element: <></> } } })
    );
    expect(result.current.routes["0"].path).toBe("/");
  });
});
