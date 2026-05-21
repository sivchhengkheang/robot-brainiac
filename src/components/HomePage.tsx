import React, { useMemo, useState } from 'react';
import { BrainCircuit, RotateCcw, Languages, Play, Star, Lock, GraduationCap } from 'lucide-react';
import { LevelConfig, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import logo from "../../public/robot-obstacle.png"

interface HomePageProps {
    language: Language;
    onToggleLanguage: () => void;
    onResetProgress: () => void;
    levelProgress: Record<number, number>;
    initialLevels: LevelConfig[];
    onLevelSelect: (level: LevelConfig) => void;
    nextPlayableLevel: LevelConfig;
    isTutorialCompleted: boolean;
    onStartTutorial: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
    language,
    onToggleLanguage,
    onResetProgress,
    levelProgress,
    initialLevels,
    onLevelSelect,
    nextPlayableLevel,
    isTutorialCompleted,
    onStartTutorial,
}) => {
    const t = TRANSLATIONS[language];
    const totalStars = Object.values(levelProgress).reduce((a: number, b: number) => a + b, 0);

    // Group levels by theme
    const levelGroups = useMemo(() => {
        return [
            { name: language === 'km' ? 'ព្រៃឈើ (Forest)' : 'Forest Pattern', range: [1, 20], theme: 'text-green-600 bg-green-50 border-green-200', activeTheme: 'bg-green-600 text-white' },
            { name: language === 'km' ? 'ទឹក (Water)' : 'Water Crossing', range: [21, 40], theme: 'text-blue-600 bg-blue-50 border-blue-200', activeTheme: 'bg-blue-600 text-white' },
            { name: language === 'km' ? 'គុកងងឹត (Dungeon)' : 'Dungeon Maze', range: [41, 60], theme: 'text-purple-600 bg-purple-50 border-purple-200', activeTheme: 'bg-purple-600 text-white' },
            { name: language === 'km' ? 'ភ្នំភ្លើង (Volcano)' : 'Volcano Dash', range: [61, 80], theme: 'text-red-600 bg-red-50 border-red-200', activeTheme: 'bg-red-600 text-white' },
            { name: language === 'km' ? 'ចម្រុះ (Mix)' : 'Master Challenge', range: [81, 100], theme: 'text-amber-600 bg-amber-50 border-amber-200', activeTheme: 'bg-amber-600 text-white' },
        ];
    }, [language]);

    const [activeGroupIdx, setActiveGroupIdx] = useState(0);

    return (
        <div className="container mx-auto px-4 py-4 h-full flex flex-col overflow-y-auto">
            {/* Header */}
            <header className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-6 shrink-0">
                <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                    <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg overflow-hidden shrink-0">
                        {/* <BrainCircuit className="w-8 h-8 text-white" /> */}
                        <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 flex flex-col items-start justify-start  -space-y-1.5">
                            <span>
                                ROBOT
                            </span>
                            <span className="text-lg font-light tracking-wider">
                                OBSTACLE
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 flex-wrap w-full sm:w-auto">
                    <button
                        onClick={onStartTutorial}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-100 rounded-full transition-all text-sm font-bold"
                    >
                        <GraduationCap className="w-4 h-4" />
                        <span>{language === 'km' ? 'រៀនលេង (Tutorial)' : 'Tutorial'}</span>
                    </button>

                    <button
                        onClick={onResetProgress}
                        className="px-4 py-2 text-gray-400 bg-red-50 hover:text-red-500 hover:bg-red-100 border-red-100 border hover:border-red-100 rounded-full transition-colors flex items-center justify-center gap-2 text-sm"
                        title={language === 'km' ? 'លុបការរក្សាទុក' : 'Reset Progress'}
                    >
                        <RotateCcw className="w-4 h-4" />
                        {language === 'km' ? 'លុបការរក្សាទុក' : 'Reset Progress'}
                    </button>

                    <button
                        onClick={onToggleLanguage}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all text-sm font-medium text-gray-600"
                    >
                        <Languages className="w-4 h-4" />
                        <span>{language === 'km' ? 'EN' : 'KH'}</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-5xl mx-auto w-full pb-4 flex flex-col">

                {/* Hero Section */}
                {!isTutorialCompleted ? (
                    /* Full-width Welcome Banner for new users */
                    <div className="mb-4 sm:mb-6 shrink-0">
                        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-3xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-white/20 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                                {/* Robot illustration */}
                                {/* <div className="w-28 h-28 bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg border border-white/20 shrink-0">
                                    <span className="text-6xl animate-bounce" style={{ animationDuration: '2s' }}>🤖</span>
                                </div> */}

                                <div className="flex-1 text-center md:text-left">
                                    <h2 className="text-3xl font-black mb-2 tracking-tight">
                                        {language === 'km' ? (
                                            <div className="flex items-center justify-center md:justify-start gap-2">
                                                <span className="text-3xl font-black tracking-tight">សូមស្វាគមន៍</span>
                                            </div>) : (
                                            <div className="flex items-center justify-center md:justify-start gap-2">
                                                <span className="text-3xl font-black tracking-tight">Welcome</span>
                                            </div>)}
                                    </h2>
                                    <p className="text-base opacity-90 mb-4 max-w-lg mx-auto md:mx-0">
                                        {t.welcomeMessage}
                                    </p>
                                    <button
                                        onClick={onStartTutorial}
                                        className="bg-white text-purple-700 px-6 py-3 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-3 mx-auto md:mx-0 animate-pulse hover:animate-none border-4 border-white/30 hover:border-white/50"
                                    >
                                        <GraduationCap className="w-5 h-5" />
                                        {language === 'km' ? '▶ ចាប់ផ្តើមរៀន (Tutorial)' : '▶ Start Tutorial'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Normal 2-column layout for returning users */
                    <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 shrink-0">
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white shadow-xl shadow-purple-200 flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>

                            <div>
                                <h2 className="text-xl sm:text-2xl font-black mb-1">
                                    {t.continueLesson}
                                </h2>
                                <p className="opacity-90 mb-3 sm:mb-4 text-sm sm:text-base">
                                    {nextPlayableLevel.id === 0 ? nextPlayableLevel.name : `${t.level} ${nextPlayableLevel.id}`}
                                </p>
                            </div>

                            <button
                                onClick={() => onLevelSelect(nextPlayableLevel)}
                                className="bg-white text-purple-700 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 w-max"
                            >
                                <Play className="fill-current w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                {t.playNextLevel}
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-center gap-3 sm:gap-4">
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="font-bold text-gray-500 uppercase tracking-wider text-[10px] sm:text-xs">{t.totalProgress}</span>
                                    <span className="font-black text-xl sm:text-2xl text-gray-800">{Object.keys(levelProgress).filter(id => Number(id) > 0 && levelProgress[Number(id)] !== undefined).length} / 100</span>
                                </div>
                                <div className="h-3 sm:h-4 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                                        style={{ width: `${(Object.keys(levelProgress).filter(id => Number(id) > 0 && levelProgress[Number(id)] !== undefined).length / 100) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="p-2 sm:p-3 bg-yellow-50 rounded-xl sm:rounded-2xl shrink-0">
                                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 fill-yellow-500" />
                                </div>
                                <div>
                                    <div className="text-xl sm:text-2xl font-black text-gray-800">{totalStars}</div>
                                    <div className="text-xs sm:text-sm font-medium text-gray-400">{t.starsEarned}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Level Grid Sections */}
                <div className={`relative ${!isTutorialCompleted ? 'opacity-40 pointer-events-none select-none' : ''}`}>
                    {/* Overlay message when tutorial not completed */}
                    {!isTutorialCompleted && (
                        <div className="absolute inset-0 z-10 flex items-start justify-center pt-8 pointer-events-none">
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-gray-200 pointer-events-auto">
                                <p className="text-gray-600 font-bold text-sm flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-gray-400" />
                                    {t.completeTutorial}
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="flex gap-2 overflow-x-auto pb-2 mb-2 no-scrollbar shrink-0">
                        {levelGroups.map((group, idx) => {
                            const groupLevels = initialLevels.filter(l => l.id >= group.range[0] && l.id <= group.range[1]);
                            const completedCount = groupLevels.filter(l => levelProgress[l.id] !== undefined).length;
                            const isActive = activeGroupIdx === idx;
                            return (
                                <button
                                    key={group.name}
                                    onClick={() => setActiveGroupIdx(idx)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full font-bold transition-all ${isActive ? group.activeTheme : `bg-white text-gray-600 hover:bg-gray-50 border border-gray-200`}`}
                                >
                                    {group.name} <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${isActive ? 'bg-black/20' : 'bg-gray-100'}`}>{completedCount}/20</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="pb-8">
                        {(() => {
                            const group = levelGroups[activeGroupIdx];
                            const groupLevels = initialLevels.filter(l => l.id >= group.range[0] && l.id <= group.range[1]);


                            // Only show group if previous group is at least partially started or it's the first group
                            // const previousGroupEnd = group.range[0] - 1;
                            // const isGroupLocked = groupIdx > 0 && !levelProgress[previousGroupEnd];

                            return (
                                <div key={group.name} className="animate-in slide-in-from-bottom-4 fade-in duration-500">

                                    <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3">
                                        {groupLevels.map((level) => {
                                            const stars = levelProgress[level.id];
                                            const isCompleted = stars !== undefined;
                                            // const isLocked = false;
                                            const isLocked = level.id !== 1 && !levelProgress[level.id - 1];
                                            const isNext = !isLocked && !isCompleted;

                                            return (
                                                <button
                                                    key={level.id}
                                                    disabled={isLocked}
                                                    onClick={() => !isLocked && onLevelSelect(level)}
                                                    className={`
                              relative aspect-square rounded-2xl border-[3px] transition-all flex flex-col items-center justify-center outline-none focus:outline-none
                              ${isLocked
                                                            ? 'bg-gray-50 border-gray-100 text-gray-300'
                                                            : isCompleted
                                                                ? 'bg-white border-green-200 text-gray-800 shadow-sm hover:-translate-y-1 hover:shadow-md'
                                                                : 'bg-white border-blue-200 text-blue-600 shadow-sm hover:border-blue-400 hover:shadow-md hover:-translate-y-1'
                                                        }
                              ${isNext ? 'border-blue-400 border-4 shadow-md animate-pulse' : ''}
                            `}
                                                >
                                                    {isLocked ? (
                                                        <Lock className="w-5 h-5 opacity-50" />
                                                    ) : (
                                                        <>
                                                            <span className={`text-lg font-bold ${isCompleted ? 'mb-1' : ''}`}>{level.id}</span>
                                                            {isCompleted && (
                                                                <div className="flex gap-0.5">
                                                                    {[1, 2, 3].map(s => (
                                                                        <Star key={s} size={10} className={`${s <= stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </main>

            {/* Footer */}
            {/* <footer className="shrink-0 text-center text-gray-400 text-sm py-3 border-t border-gray-100">
                <p>{t.footerText}</p>
            </footer> */}
        </div>
    );
};

export default HomePage;
