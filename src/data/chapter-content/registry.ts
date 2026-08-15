// ==================================================
// CHAPTER CONTENT REGISTRY
// ==================================================
// This file imports every chapter content file and
// makes it available by key.
//
// To add a new chapter, create a file like:
//   src/data/chapter-content/g11-ch5.ts
// then add it to the imports and the registry below.
// ==================================================

import type { ChapterContent } from './types';
import { g11_ch01 } from './g11-ch1';
import { g11_ch02 } from './g11-ch2';
import { g11_ch03 } from './g11-ch3';
import { g11_ch04 } from './g11-ch4';
import { g11_ch05 } from './g11-ch5';
import { g11_ch06 } from './g11-ch6';
import { g11_ch07 } from './g11-ch7';
import { g11_ch08 } from './g11-ch8';
import { g11_ch09 } from './g11-ch9';
import { g11_ch10 } from './g11-ch10';
import { g12_ch01 } from './g12-ch1';
import { g12_ch02 } from './g12-ch2';
import { g12_ch03 } from './g12-ch3';
import { g12_ch04 } from './g12-ch4';
import { g12_ch05 } from './g12-ch5';
import { g12_ch06 } from './g12-ch6';
import { g12_ch07 } from './g12-ch7';
import { g12_ch08 } from './g12-ch8';
import { g12_ch09 } from './g12-ch9';
import { g12_ch10 } from './g12-ch10';

// Registry: key -> chapter content
const registry: Record<string, ChapterContent> = {
  'grade-11/chapter-01': g11_ch01,
  'grade-11/chapter-02': g11_ch02,
  'grade-11/chapter-03': g11_ch03,
  'grade-11/chapter-04': g11_ch04,
  'grade-11/chapter-05': g11_ch05,
  'grade-11/chapter-06': g11_ch06,
  'grade-11/chapter-07': g11_ch07,
  'grade-11/chapter-08': g11_ch08,
  'grade-11/chapter-09': g11_ch09,
  'grade-11/chapter-10': g11_ch10,
  'grade-12/chapter-01': g12_ch01,
  'grade-12/chapter-02': g12_ch02,
  'grade-12/chapter-03': g12_ch03,
  'grade-12/chapter-04': g12_ch04,
  'grade-12/chapter-05': g12_ch05,
  'grade-12/chapter-06': g12_ch06,
  'grade-12/chapter-07': g12_ch07,
  'grade-12/chapter-08': g12_ch08,
  'grade-12/chapter-09': g12_ch09,
  'grade-12/chapter-10': g12_ch10,
};

// Get chapter content by grade slug and chapter slug
export function getChapterContent(gradeSlug: string, chapterSlug: string): ChapterContent | undefined {
  return registry[`${gradeSlug}/${chapterSlug}`];
}

export { registry };
