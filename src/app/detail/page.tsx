"use client"

import React from 'react'
import Image from "next/image";
import { Clock, Star, Users, BookOpen, Award, Play } from "lucide-react"

const detail = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Course Hero Section */}
            <div className="bg-linear-to-b from-[#128884] to-[#03B5AA] text-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-7/12">
                            <div className="flex items-center mb-3">
                                <span className="bg-emerald-700 text-xs font-medium px-2 py-1 rounded">DIGITAL MARKETING</span>
                                <div className="flex items-center ml-3">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="ml-1 text-sm">(120 ulasan)</span>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                Digital Marketing: Strategi Komprehensif untuk Bisnis Online
                            </h1>
                            <p className="text-emerald-50 mb-6">
                                Pelajari strategi digital marketing terkini untuk meningkatkan brand awareness, engagement, dan
                                konversi. Kursus ini dirancang untuk pemula hingga tingkat menengah.
                            </p>

                            <div className="flex flex-wrap gap-6 mb-8">
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 mr-2" />
                                    <div>
                                        <p className="text-sm text-emerald-100">Durasi</p>
                                        <p className="font-medium">8 minggu</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Users className="w-5 h-5 mr-2" />
                                    <div>
                                        <p className="text-sm text-emerald-100">Peserta</p>
                                        <p className="font-medium">1,240+ siswa</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <BookOpen className="w-5 h-5 mr-2" />
                                    <div>
                                        <p className="text-sm text-emerald-100">Modul</p>
                                        <p className="font-medium">24 pelajaran</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Award className="w-5 h-5 mr-2" />
                                    <div>
                                        <p className="text-sm text-emerald-100">Level</p>
                                        <p className="font-medium">Pemula - Menengah</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <Image
                                    src="https://placehold.co/600x400"
                                    alt="Instructor"
                                    width={48}
                                    height={48}
                                    className="rounded-full border-2 border-white"
                                />
                                <div className="ml-3">
                                    <p className="font-medium">Dr. Siti Rahayu</p>
                                    <p className="text-sm text-emerald-100">Digital Marketing Specialist</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-5/12">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
                                <div className="relative mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src="https://placehold.co/600x400"
                                        alt="Course Preview"
                                        width={400}
                                        height={240}
                                        className="w-full"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-emerald-600 bg-opacity-80 rounded-full p-4">
                                            <Play className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <span className="text-3xl font-bold">Rp. 299.000</span>
                                        <span className="text-gray-500 line-through ml-2">Rp. 499.000</span>
                                    </div>
                                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">40% OFF</span>
                                </div>

                                <button className="w-full bg-[#03B5AA] hover:bg-emerald-700 text-white py-3 rounded-md font-medium mb-3">
                                    Daftar Sekarang
                                </button>

                                <button className="w-full border border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 rounded-md font-medium">
                                    Tambahkan ke Wishlist
                                </button>

                                <div className="mt-6 border-t pt-4">
                                    <h4 className="font-medium mb-2">Kursus ini mencakup:</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-emerald-600 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>24 video pembelajaran on-demand</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-emerald-600 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>12 artikel dan sumber belajar</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-emerald-600 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Akses seumur hidup</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-emerald-600 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Sertifikat penyelesaian</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-7/12">
                        {/* Tabs */}
                        <div className="border-b mb-8">
                            <div className="flex space-x-8">
                                <button className="text-emerald-600 border-b-2 border-emerald-600 pb-4 font-medium">
                                    Tentang Kursus
                                </button>
                                <button className="text-gray-500 hover:text-emerald-600 pb-4 font-medium">Kurikulum</button>
                                <button className="text-gray-500 hover:text-emerald-600 pb-4 font-medium">Ulasan</button>
                                <button className="text-gray-500 hover:text-emerald-600 pb-4 font-medium">Instruktur</button>
                            </div>
                        </div>

                        {/* Course Description */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">Deskripsi Kursus</h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    Kursus Digital Marketing ini dirancang untuk membekali Anda dengan pengetahuan dan keterampilan yang
                                    diperlukan untuk sukses dalam dunia pemasaran digital yang terus berkembang. Baik Anda seorang pemula
                                    yang ingin memulai karir di bidang digital marketing atau seorang profesional yang ingin memperbarui
                                    keterampilan Anda, kursus ini akan memberikan pemahaman mendalam tentang strategi dan taktik pemasaran
                                    digital yang efektif.
                                </p>
                                <p>
                                    Sepanjang kursus, Anda akan mempelajari berbagai aspek digital marketing, termasuk SEO, media sosial,
                                    email marketing, content marketing, dan paid advertising. Anda juga akan belajar cara menganalisis
                                    data untuk mengukur keberhasilan kampanye Anda dan membuat keputusan berdasarkan data.
                                </p>
                                <p>
                                    Dengan kombinasi teori dan praktik, kursus ini akan membantu Anda mengembangkan strategi digital
                                    marketing yang komprehensif untuk bisnis atau merek Anda. Pada akhir kursus, Anda akan memiliki
                                    portofolio proyek nyata yang dapat Anda tunjukkan kepada calon pemberi kerja atau klien.
                                </p>
                            </div>
                        </div>

                        {/* What You'll Learn */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">Apa yang Akan Anda Pelajari</h2>
                            <div className="grid md:grid-cols-2 gap-3">
                                <div className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-emerald-600 mr-2 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Memahami dasar-dasar digital marketing dan ekosistemnya</span>
                                </div>
                                <div className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-emerald-600 mr-2 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Mengoptimalkan website untuk mesin pencari (SEO)</span>
                                </div>
                                <div className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-emerald-600 mr-2 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Membuat strategi content marketing yang efektif</span>
                                </div>
                                <div className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-emerald-600 mr-2 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Mengelola kampanye media sosial yang sukses</span>
                                </div>
                                <div className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-emerald-600 mr-2 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Merancang kampanye email marketing yang efektif</span>
                                </div>
                                <div className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-emerald-600 mr-2 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Menganalisis data untuk mengoptimalkan kampanye</span>
                                </div>
                                <div className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-emerald-600 mr-2 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Mengelola kampanye iklan berbayar (Google Ads, Facebook Ads)</span>
                                </div>
                                <div className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-emerald-600 mr-2 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Mengukur ROI dari kampanye digital marketing</span>
                                </div>
                            </div>
                        </div>

                        {/* Course Curriculum Preview */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">Kurikulum Kursus</h2>

                            <div className="border rounded-lg mb-4">
                                <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
                                    <h3 className="font-medium">Modul 1: Pengenalan Digital Marketing</h3>
                                    <span className="text-sm text-gray-500">3 pelajaran • 45 menit</span>
                                </div>
                                <div className="p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Play className="w-4 h-4 mr-3 text-emerald-600" />
                                            <span>Apa itu Digital Marketing?</span>
                                        </div>
                                        <span className="text-sm text-gray-500">15:00</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Play className="w-4 h-4 mr-3 text-emerald-600" />
                                            <span>Ekosistem Digital Marketing</span>
                                        </div>
                                        <span className="text-sm text-gray-500">18:30</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Play className="w-4 h-4 mr-3 text-emerald-600" />
                                            <span>Mengapa Digital Marketing Penting?</span>
                                        </div>
                                        <span className="text-sm text-gray-500">12:45</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border rounded-lg mb-4">
                                <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
                                    <h3 className="font-medium">Modul 2: Search Engine Optimization (SEO)</h3>
                                    <span className="text-sm text-gray-500">4 pelajaran • 1 jam 20 menit</span>
                                </div>
                                <div className="p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Play className="w-4 h-4 mr-3 text-emerald-600" />
                                            <span>Dasar-dasar SEO</span>
                                        </div>
                                        <span className="text-sm text-gray-500">22:15</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Play className="w-4 h-4 mr-3 text-emerald-600" />
                                            <span>On-page SEO</span>
                                        </div>
                                        <span className="text-sm text-gray-500">18:45</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Play className="w-4 h-4 mr-3 text-emerald-600" />
                                            <span>Off-page SEO</span>
                                        </div>
                                        <span className="text-sm text-gray-500">20:30</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Play className="w-4 h-4 mr-3 text-emerald-600" />
                                            <span>Technical SEO</span>
                                        </div>
                                        <span className="text-sm text-gray-500">19:00</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full border border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 rounded-md font-medium">
                                Lihat Semua 24 Pelajaran
                            </button>
                        </div>
                    </div>

                    <div className="md:w-5/12">
                        {/* Related Courses */}
                        <div className="border rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold mb-4">Kursus Terkait</h3>

                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <Image
                                        src="https://placehold.co/600x400"
                                        alt="Related Course"
                                        width={80}
                                        height={60}
                                        className="rounded object-cover"
                                    />
                                    <div>
                                        <h4 className="font-medium">Social Media Marketing Masterclass</h4>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Clock className="w-3 h-3 mr-1" />
                                            <span>6 minggu</span>
                                            <span className="mx-2">•</span>
                                            <span>Rp. 249.000</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Image
                                        src="/placeholder.svg?height=60&width=80"
                                        alt="Related Course"
                                        width={80}
                                        height={60}
                                        className="rounded object-cover"
                                    />
                                    <div>
                                        <h4 className="font-medium">Content Marketing Strategy</h4>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Clock className="w-3 h-3 mr-1" />
                                            <span>4 minggu</span>
                                            <span className="mx-2">•</span>
                                            <span>Rp. 199.000</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Image
                                        src="/placeholder.svg?height=60&width=80"
                                        alt="Related Course"
                                        width={80}
                                        height={60}
                                        className="rounded object-cover"
                                    />
                                    <div>
                                        <h4 className="font-medium">Google Ads & Facebook Ads</h4>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Clock className="w-3 h-3 mr-1" />
                                            <span>5 minggu</span>
                                            <span className="mx-2">•</span>
                                            <span>Rp. 279.000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="border rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-4">Pertanyaan Umum</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium mb-2">Apakah kursus ini cocok untuk pemula?</h4>
                                    <p className="text-gray-600 text-sm">
                                        Ya, kursus ini dirancang untuk pemula hingga tingkat menengah. Kami memulai dengan konsep dasar dan
                                        secara bertahap membahas topik yang lebih kompleks.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium mb-2">Berapa lama saya dapat mengakses materi kursus?</h4>
                                    <p className="text-gray-600 text-sm">
                                        Anda memiliki akses seumur hidup ke materi kursus setelah mendaftar. Anda dapat belajar dengan
                                        kecepatan Anda sendiri dan meninjau materi kapan saja.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium mb-2">Apakah ada sertifikat setelah menyelesaikan kursus?</h4>
                                    <p className="text-gray-600 text-sm">
                                        Ya, Anda akan menerima sertifikat penyelesaian yang dapat Anda bagikan di LinkedIn atau tambahkan ke
                                        resume Anda setelah menyelesaikan semua modul kursus.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium mb-2">Apakah ada dukungan instruktur selama kursus?</h4>
                                    <p className="text-gray-600 text-sm">
                                        Ya, Anda dapat mengajukan pertanyaan di forum diskusi kursus dan instruktur akan merespons dalam
                                        waktu 24-48 jam. Anda juga dapat berinteraksi dengan peserta kursus lainnya.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default detail