export default function handler(res: {
  status: (arg0: number) => {
    (): unknown;
    new (): unknown;
    json: { (arg0: { hello: string }): void; new (): unknown };
  };
}) {
  res.status(200).json({ hello: "world" });
}
