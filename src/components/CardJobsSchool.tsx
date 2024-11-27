interface card {
  icon: string;
  company: string;
  role: string;
  initDate: string;
  endDate: string;
}
export function CardJobsSchool({
  icon,
  company,
  role,
  initDate,
  endDate,
}: card) {
  return (
    <ol className="mt-6 space-y-6">
      <li className="flex gap-6 ">
        <div className="flex relative   w-10 h-10 mt-1 flex-none items-center justify-center">
          <img
            src={icon}
            alt="img"
            className="md:w-10 md:h-10 h-8 w-8 rounded-full"
          />
        </div>
        <dl className=" flex flex-auto flex-wrap gap-x-2 ">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none md:text-base text-sm font-bold text-slate-300 dark:text-tecHeavy">
            {company}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="md:text-sm text-xs  text-slate-400 dark:text-tecHeavy">
            {role}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd className="ml-auto md:text-md text-xs text-zinc-400 dark:text-zinc-500 ">
            <time dateTime={initDate}>
              {initDate}
            </time>
            <span aria-hidden="true">-</span>
            <time dateTime={endDate}>
              {endDate}
            </time>
          </dd>
        </dl>
      </li>
    </ol>
  );
}
