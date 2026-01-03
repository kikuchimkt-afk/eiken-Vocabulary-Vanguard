import { grade2Data } from './grade2_2023_1';
import { grade2_2025_1Data } from './grade2_2025_1';
import { grade2_2024_3Data } from './grade2_2024_3';
import { grade2_2025_2Data } from './grade2_2025_2';
import { grade5Data } from './grade5_2025_1';
import { grade5_2025_2Data } from './grade5_2025_2';
import { grade5_2024_3Data } from './grade5_2024_3';
import { grade4Data } from './grade4_2025_2';
import { grade4_2025_1Data } from './grade4_2025_1';

import { grade4_2024_3Data } from './grade4_2024_3';
import { grade4_2024_2Data } from './grade4_2024_2';
import { grade4_2024_1Data } from './grade4_2024_1';
import { grade4_2023_3Data } from './grade4_2023_3';
import { grade3Data } from './grade3_2025_2';
import { grade3_2025_1Data } from './grade3_2025_1';
import { grade3_2024_3Data } from './grade3_2024_3';
import { grade3_2024_2Data } from './grade3_2024_2';
import { grade3_2024_1Data } from './grade3_2024_1';
import { gradePre2Data } from './gradePre2_2025_2';
import { gradePre2_2025_1Data } from './gradePre2_2025_1';
import { gradePre2_2024_3Data } from './gradePre2_2024_3';
import { gradePre2_2024_2Data } from './gradePre2_2024_2';
import { gradePre2_2024_1Data } from './gradePre2_2024_1';
import { gradePre2_2023_2Data } from './gradePre2_2023_2';
import { gradePre2_2023_3Data } from './gradePre2_2023_3';
import { gradePre2PlusData } from './gradePre2Plus_2025_2';
import { gradePre2Plus_2025_2_subData } from './gradePre2Plus_2025_2_sub';
import { gradePre2Plus2025_1Data } from './gradePre2Plus_2025_1';
import { gradePre2Plus_2025_1_subData } from './gradePre2Plus_2025_1_sub';
import { gradePre1Data } from './gradePre1_2025_2';

export const exams = [
    {
        id: '2025-2-gp1',
        grade: '準1級',
        gradeLabel: '準1級',
        year: 2025,
        session: '第2回',
        title: '2025年度 第2回検定',
        subTitle: 'Advanced Vocabulary & Idioms',
        data: gradePre1Data
    },
    {
        id: '2025-1-g2',
        grade: '2級',
        gradeLabel: '2級',
        year: 2025,
        session: '第1回',
        title: '2025年度 第1回検定',
        subTitle: 'Science & History',
        data: grade2_2025_1Data
    },
    {
        id: '2024-3-g2',
        grade: '2級',
        gradeLabel: '2級',
        year: 2024,
        session: '第3回',
        title: '2024年度 第3回検定',
        subTitle: 'Modern Life & Society',
        data: grade2_2024_3Data
    },
    {
        id: '2023-1-g2',
        grade: '2級',
        gradeLabel: '2級',
        year: 2023,
        session: '第1回',
        title: '2023年度 第1回検定',
        subTitle: 'A New Type of Coffee / Polar Bears etc.',
        data: grade2Data
    },
    {
        id: '2025-2-gp2p-sub',
        grade: '準2級+',
        gradeLabel: '準2級+',
        year: 2025,
        session: '第2回',
        title: '2025年度 第2回検定 (準会場)',
        subTitle: 'Vocabulary & Expressions',
        badge: '準会場',
        data: gradePre2Plus_2025_2_subData
    },
    {
        id: '2025-2-g2',
        grade: '2級',
        gradeLabel: '2級',
        year: 2025,
        session: '第2回',
        title: '2025年度 第2回検定',
        subTitle: 'Vocabulary & Expressions',
        data: grade2_2025_2Data
    },
    {
        id: '2025-1-gp2p-sub',
        grade: '準2級+',
        gradeLabel: '準2級+',
        year: 2025,
        session: '第1回',
        title: '2025年度 第1回検定 (準会場)',
        subTitle: 'Vocabulary & Expressions',
        badge: '準会場',
        data: gradePre2Plus_2025_1_subData
    },
    {
        id: '2025-1-gp2p',
        grade: '準2級+',
        gradeLabel: '準2級+',
        year: 2025,
        session: '第1回',
        title: '2025年度 第1回検定',
        subTitle: 'Vocabulary & Expressions',
        data: gradePre2Plus2025_1Data
    },

    {
        id: '2025-2-gp2p',
        grade: '準2級+',
        gradeLabel: '準2級+',
        year: 2025,
        session: '第2回',
        title: '2025年度 第2回検定',
        subTitle: 'Advanced Vocabulary & Phrases',
        data: gradePre2PlusData
    },
    {
        id: '2025-2-gp2',
        grade: '準2級',
        gradeLabel: '準2級',
        year: 2025,
        session: '第2回',
        title: '2025年度 第2回検定',
        subTitle: 'Vocabulary & Expressions',
        data: gradePre2Data
    },
    {
        id: '2025-1-gp2',
        grade: '準2級',
        gradeLabel: '準2級',
        year: 2025,
        session: '第1回',
        title: '2025年度 第1回検定',
        subTitle: 'Education',
        data: gradePre2_2025_1Data
    },
    {
        id: '2024-3-gp2',
        grade: '準2級',
        gradeLabel: '準2級',
        year: 2024,
        session: '第3回',
        title: '2024年度 第3回検定',
        subTitle: 'Daily Life & Social',
        data: gradePre2_2024_3Data
    },
    {
        id: '2024-2-gp2',
        grade: '準2級',
        gradeLabel: '準2級',
        year: 2024,
        session: '第2回',
        title: '2024年度 第2回検定',
        subTitle: 'Daily Life & Social',
        data: gradePre2_2024_2Data
    },
    {
        id: '2024-1-gp2',
        grade: '準2級',
        gradeLabel: '準2級',
        year: 2024,
        session: '第1回',
        title: '2024年度 第1回検定',
        subTitle: 'Daily Life & Social',
        data: gradePre2_2024_1Data
    },
    {
        id: '2023-3-gp2',
        grade: '準2級',
        gradeLabel: '準2級',
        year: 2023,
        session: '第3回',
        title: '2023年度 第3回検定',
        subTitle: 'Daily Life & Social',
        data: gradePre2_2023_3Data
    },
    {
        id: '2023-2-gp2',
        grade: '準2級',
        gradeLabel: '準2級',
        year: 2023,
        session: '第2回',
        title: '2023年度 第2回検定',
        subTitle: 'Daily Life & Social',
        data: gradePre2_2023_2Data
    },
    {
        id: '2025-2-g3',
        grade: '3級',
        gradeLabel: '3級',
        year: 2025,
        session: '第2回',
        title: '2025年度 第2回検定',
        subTitle: 'Daily Life & Expressions',
        data: grade3Data
    },
    {
        id: '2025-2-g4',
        grade: '4級',
        gradeLabel: '4級',
        year: 2025,
        session: '第2回',
        title: '2025年度 第2回検定',
        subTitle: 'Daily Life & School',
        data: grade4Data
    },
    {
        id: '2025-1-g4',
        grade: '4級',
        gradeLabel: '4級',
        year: 2025,
        session: '第1回',
        title: '2025年度 第1回検定',
        subTitle: 'Daily Life & School',
        data: grade4_2025_1Data
    },
    {
        id: '2024-3-g4',
        grade: '4級',
        gradeLabel: '4級',
        year: 2024,
        session: '第3回',
        title: '2024年度 第3回検定',
        subTitle: 'Daily Life & School',
        data: grade4_2024_3Data
    },
    {
        id: '2024-2-g4',
        grade: '4級',
        gradeLabel: '4級',
        year: 2024,
        session: '第2回',
        title: '2024年度 第2回検定',
        subTitle: 'Daily Life & School',
        data: grade4_2024_2Data
    },
    {
        id: '2024-1-g4',
        grade: '4級',
        gradeLabel: '4級',
        year: 2024,
        session: '第1回',
        title: '2024年度 第1回検定',
        subTitle: 'Daily Life & School',
        data: grade4_2024_1Data
    },
    {
        id: '2023-3-g4',
        grade: '4級',
        gradeLabel: '4級',
        year: 2023,
        session: '第3回',
        title: '2023年度 第3回検定',
        subTitle: 'Daily Life & School',
        data: grade4_2023_3Data
    },
    {
        id: '2025-1-g3',
        grade: '3級',
        gradeLabel: '3級',
        year: 2025,
        session: '第1回',
        title: '2025年度 第1回検定',
        subTitle: 'Daily Life',
        data: grade3_2025_1Data
    },
    {
        id: '2024-3-g3',
        grade: '3級',
        gradeLabel: '3級',
        year: 2024,
        session: '第3回',
        title: '2024年度 第3回検定',
        subTitle: 'Daily Life',
        data: grade3_2024_3Data
    },
    {
        id: '2024-2-g3',
        grade: '3級',
        gradeLabel: '3級',
        year: 2024,
        session: '第2回',
        title: '2024年度 第2回検定',
        subTitle: 'Daily Life',
        data: grade3_2024_2Data
    },
    {
        id: '2024-1-g3',
        grade: '3級',
        gradeLabel: '3級',
        year: 2024,
        session: '第1回',
        title: '2024年度 第1回検定',
        subTitle: 'Daily Life',
        data: grade3_2024_1Data
    },
    {
        id: '2025-1-g5',
        grade: '5級',
        gradeLabel: '5級',
        year: 2025,
        session: '第1回',
        title: '2025年度 第1回検定',
        subTitle: 'Conversation & Basic Grammar',
        data: grade5Data
    },
    {
        id: '2025-2-g5',
        grade: '5級',
        gradeLabel: '5級',
        year: 2025,
        session: '第2回',
        title: '2025年度 第2回検定',
        subTitle: 'Conversation & Basic Grammar',
        data: grade5_2025_2Data
    },
    {
        id: '2024-3-g5',
        grade: '5級',
        gradeLabel: '5級',
        year: 2024,
        session: '第3回',
        title: '2024年度 第3回検定',
        subTitle: 'Conversation & Basic Grammar',
        data: grade5_2024_3Data
    }
];

export const getExamById = (id) => {
    return exams.find(exam => exam.id === id);
};
