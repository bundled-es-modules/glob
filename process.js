if (typeof window === "object") {
  window.process = {
    cwd: () => "/",
  };
}
