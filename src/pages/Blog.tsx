import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock,
  KanbanSquare,
  Lightbulb,
  Rocket,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import { ROUTES } from '@/constants';

const featuredPost = {
  category: 'PRODUCTIVITY',
  title: 'Why great teams spend less time managing work',
  description:
    'Project management should create clarity, not more work. Here are practical ways teams can reduce unnecessary process and focus on meaningful progress.',
  date: 'July 8, 2026',
  readTime: '6 min read',
};

const posts = [
  {
    icon: KanbanSquare,
    category: 'WORKFLOW',
    title: 'How to build a workflow your team will actually use',
    description:
      'A practical guide to creating clear workflows without adding unnecessary complexity.',
    date: 'July 5, 2026',
    readTime: '5 min read',
  },
  {
    icon: Users,
    category: 'TEAMWORK',
    title: 'Better collaboration starts with clearer ownership',
    description:
      'Learn how clear responsibilities can reduce confusion and help projects move faster.',
    date: 'July 2, 2026',
    readTime: '4 min read',
  },
  {
    icon: BarChart3,
    category: 'PRODUCTIVITY',
    title: 'Track progress without creating more meetings',
    description:
      'Simple ways to keep everyone informed while protecting your team’s focus time.',
    date: 'June 28, 2026',
    readTime: '7 min read',
  },
  {
    icon: Rocket,
    category: 'SHIPPING',
    title: 'From idea to shipped: keeping momentum alive',
    description:
      'Practical principles for helping projects move from planning to delivery.',
    date: 'June 24, 2026',
    readTime: '5 min read',
  },
  {
    icon: Lightbulb,
    category: 'PLANNING',
    title: 'Simple planning is usually better planning',
    description:
      'Why smaller plans, clear priorities, and visible progress can outperform complex systems.',
    date: 'June 20, 2026',
    readTime: '6 min read',
  },
  {
    icon: CheckCircle2,
    category: 'TASKS',
    title: 'The hidden cost of unclear tasks',
    description:
      'Small improvements to task clarity can save teams hours of confusion and rework.',
    date: 'June 16, 2026',
    readTime: '4 min read',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-white text-ink">
      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-ink px-6 py-20 md:py-28">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10" />

        <div className="absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-primary/10" />

        <div className="relative mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-primary/10 px-4 py-2 text-sm font-extrabold shadow-brutal-sm">
            <Sparkles className="h-4 w-4" />
            FLOWPILOT BLOG
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Ideas for teams that
            <br />
            want to <span className="text-primary">move faster.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted md:text-xl">
            Practical ideas about project management, teamwork, productivity,
            and building a healthier way to get meaningful work done.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="border-b-2 border-ink px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-extrabold uppercase tracking-[0.2em] text-primary">
            Featured story
          </p>

          <article className="overflow-hidden rounded-2xl border-2 border-ink bg-primary/10 shadow-brutal-sm">
            <div className="grid md:grid-cols-2">
              {/* Featured Visual */}
              <div className="flex min-h-[320px] items-center justify-center border-b-2 border-ink p-10 md:border-b-0 md:border-r-2">
                <div className="relative">
                  <div className="flex h-40 w-40 items-center justify-center rounded-3xl border-2 border-ink bg-primary shadow-brutal-sm">
                    <Rocket
                      className="h-20 w-20 text-white"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="absolute -right-8 -top-8 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-ink bg-white shadow-brutal-sm">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                </div>
              </div>

              {/* Featured Content */}
              <div className="flex flex-col justify-center bg-white p-8 md:p-12">
                <span className="text-sm font-extrabold tracking-[0.15em] text-primary">
                  {featuredPost.category}
                </span>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 font-medium leading-relaxed text-muted">
                  {featuredPost.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-muted">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {featuredPost.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl border-2 border-ink bg-primary px-5 py-3 font-extrabold text-white shadow-brutal-sm transition-transform hover:-translate-y-1"
                >
                  Read article
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="border-b-2 border-ink bg-primary/5 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary">
              Latest articles
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Learn. Improve. Ship.
            </h2>

            <p className="mt-5 text-lg font-medium leading-relaxed text-muted">
              Simple, practical ideas for teams who want clarity without the
              unnecessary complexity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const Icon = post.icon;

              return (
                <article
                  key={post.title}
                  className="group flex flex-col rounded-2xl border-2 border-ink bg-white p-6 shadow-brutal-sm transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-ink bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <p className="mt-6 text-xs font-extrabold tracking-[0.15em] text-primary">
                    {post.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold leading-tight">
                    {post.title}
                  </h3>

                  <p className="mt-4 flex-1 font-medium leading-relaxed text-muted">
                    {post.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-muted">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 font-extrabold text-ink"
                  >
                    Read article

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border-2 border-ink bg-ink p-8 text-white shadow-brutal-sm md:p-14">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white bg-primary">
                  <Zap className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-3xl font-extrabold md:text-5xl">
                  Better work, delivered.
                </h2>

                <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-white/70">
                  Practical ideas about productivity, teamwork, and shipping
                  meaningful work.
                </p>
              </div>

              <Link
                to={ROUTES.REGISTER}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-white px-6 py-3 font-extrabold text-ink transition-transform hover:-translate-y-1"
              >
                Try FlowPilot
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}