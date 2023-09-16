import { NavLayout } from '@layouts';

import type { ReactElement } from 'react';

export default function getNavLayout(page: ReactElement) {
  return <NavLayout>{page}</NavLayout>;
}
