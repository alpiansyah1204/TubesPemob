-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2021 at 08:04 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `media_sosial`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id_username` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id_username`, `username`, `password`, `email`) VALUES
(3, 'alpian', '1', 'alpiansyah1204@gmail.com'),
(4, 'alpian222', '12', 'alpiansyah@gmail.com'),
(9, 'root', '1', 'root@gmail,com'),
(6, 'root1', '12', 'alpian@gmail..com'),
(8, 'root12', '1', 'root@gmail.com'),
(10, 'root12222', '1', 'root1@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `comment_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `comment_date` datetime NOT NULL,
  `comment_caption` text NOT NULL,
  `like_comment` int(11) NOT NULL,
  `total_comment` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`comment_id`, `post_id`, `username`, `comment_date`, `comment_caption`, `like_comment`, `total_comment`) VALUES
(24, 115, 'alpian222', '2021-12-31 09:02:28', ' Sometimes you don’t know what you have until it’s gone. Appreciate what you have, before it turns into what you had.\r\n\r\nWhile there is still a time, #UdahSaatnya take your favorites to travel safely and comfortably with GoCar. Don\'t forget to also comply with health protocols. Anywhere is easier and happier.\r\n\r\nWatch the full video on @gojekindonesia. 👀\r\n\r\n#VOLIX #CultivateYouthCulture\r\nView all 31 comments', 10, 22),
(26, 115, 'alpian222', '2021-12-31 09:03:13', 'Kalian adalah pahlawan ...\r\nMinimal ga bikin macet', 22, 2),
(27, 115, 'alpian', '2021-12-31 09:03:13', 'When Rich Brian appreciates Rewind Indonesia 2021 this much, we know that we have created something.\r\n\r\nThank you @brianimanuel !\r\nSending our love and respect back to you. 🤟🙏', 22, 2),
(28, 115, 'alpian', '2021-12-31 09:03:13', 'Rewind Indonesia 2021 karya @chandraliow dan @aulion sudah bisa disaksikan! Keren banget mimin sampai merinding, kalian udah nonton? 🇮🇩👏', 22, 2),
(29, 115, 'alpian222', '2021-12-31 09:03:13', 'Hayo, siapa nih di antara Sobat IB yg pengen lanjut kuliah S1 di Singapore?\r\nKuliah di National University of Singapore (NUS) ada beasiswanya lho. Yg udah lulus SMA atau yg masih kelas 12 bisa kok daftar.\r\n\r\nGimana? Pengen, apa pengen banget?\r\n\r\nYg minat serius mau tahu syarat2nya, silakan\r\n1. FOLLOW instagram @info_beasiswa lalu\r\n2. Klik linktree di bio dan klik \"Beasiswa S1 di Singapore\" kemudian pilih National University of Singapore\r\n\r\nkalau linktree tdk respons, Ketik 👉 bit.ly/beas683 di browser internet\r\n\r\nPendaftaran khusus pelajar Indonesia sampai 14 Februari 2022\r\n\r\nSebarin info ini ke teman2 lain ya. Tag aja akun mereka semua dan share post ini di story kalian\r\n\r\nJangan lupa SHARE dan Save postingan ini biar mudah memcarinya besok2', 33, 2),
(30, 115, 'alpian', '2021-12-31 09:03:13', 'Shaadi Shihab. Keponakan mami nana yang paling kecil. Kesayangan semua. Mirip abi @quraish.shihab ya? 😍', 23, 32),
(31, 115, 'alpian222', '2021-12-31 09:03:13', 'Omicron lagi, Omicron terus. Di mana-mana Omicron jadi bahasan. Apa, sih, Omicron? Apa gejalanya? Bahaya enggak?\r\n\r\nBiar enggak salah paham #eh , geser ya 👉🏻 | Narasi Newsroom', 2, 2),
(32, 115, 'alpian', '2021-12-31 09:03:13', 'Tolong untuk para perokok untuk tidak menyalakan rokok saat berkendara. Karena abu rokok yang terbang tanpa sadar akan mengenai mata pengendara yang dibelakangnya.\r\n', 22, 2),
(33, 115, 'alpian', '2021-12-31 09:03:13', 'Update:\r\nSedang diselidiki & ditangani Tim google.\r\nSudah konsul & mengisi form laporan juga.\r\n\r\nSementara aman.\r\nAku sudah ganti password email & autentikasi nomor hp.\r\n\r\nCardano Jahanam.\r\nSusbcriber gua turun 80k gegara kau bedebah. (._.)\r\nBiadab, keparat, peranakan kotor, kawin silang jenglot.', 12, 12),
(34, 115, 'alpian222', '2021-12-31 09:03:13', 'Kalian adalah pahlawan ...\r\nMinimal ga bikin macet', 22, 2),
(35, 115, 'alpian', '2021-12-31 09:03:13', 'When Rich Brian appreciates Rewind Indonesia 2021 this much, we know that we have created something.\r\n\r\nThank you @brianimanuel !\r\nSending our love and respect back to you. 🤟🙏', 22, 2),
(36, 115, 'alpian', '2021-12-31 09:03:13', 'Rewind Indonesia 2021 karya @chandraliow dan @aulion sudah bisa disaksikan! Keren banget mimin sampai merinding, kalian udah nonton? 🇮🇩👏', 22, 2),
(37, 115, 'alpian222', '2021-12-31 09:03:13', 'Hayo, siapa nih di antara Sobat IB yg pengen lanjut kuliah S1 di Singapore?\r\nKuliah di National University of Singapore (NUS) ada beasiswanya lho. Yg udah lulus SMA atau yg masih kelas 12 bisa kok daftar.\r\n\r\nGimana? Pengen, apa pengen banget?\r\n\r\nYg minat serius mau tahu syarat2nya, silakan\r\n1. FOLLOW instagram @info_beasiswa lalu\r\n2. Klik linktree di bio dan klik \"Beasiswa S1 di Singapore\" kemudian pilih National University of Singapore\r\n\r\nkalau linktree tdk respons, Ketik 👉 bit.ly/beas683 di browser internet\r\n\r\nPendaftaran khusus pelajar Indonesia sampai 14 Februari 2022\r\n\r\nSebarin info ini ke teman2 lain ya. Tag aja akun mereka semua dan share post ini di story kalian\r\n\r\nJangan lupa SHARE dan Save postingan ini biar mudah memcarinya besok2', 33, 2),
(39, 115, 'alpian222', '2021-12-31 09:03:13', 'Omicron lagi, Omicron terus. Di mana-mana Omicron jadi bahasan. Apa, sih, Omicron? Apa gejalanya? Bahaya enggak?\r\n\r\nBiar enggak salah paham #eh , geser ya 👉🏻 | Narasi Newsroom', 2, 2),
(40, 115, 'alpian', '2021-12-31 09:03:13', 'Tolong untuk para perokok untuk tidak menyalakan rokok saat berkendara. Karena abu rokok yang terbang tanpa sadar akan mengenai mata pengendara yang dibelakangnya.\r\n', 22, 2),
(54, 114, 'alpian', '2021-12-31 17:56:18', 'kenapa hayo', 0, 0),
(55, 114, 'alpian', '2021-12-31 17:59:14', 'ssss', 0, 0),
(56, 117, 'alpian', '2021-12-31 18:48:07', 'test', 0, 0),
(58, 115, 'root1', '2022-01-01 00:28:30', 'test', 0, 0),
(62, 115, 'root12', '2022-01-01 00:35:38', 'test', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `time_post` datetime NOT NULL,
  `post_caption` text NOT NULL,
  `like_post` int(11) NOT NULL,
  `total_comments` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_id`, `username`, `time_post`, `post_caption`, `like_post`, `total_comments`) VALUES
(114, 'alpian222', '2021-12-31 03:48:46', 'Researchers from New York University conducted a study of 531 short men whose height was under 175 cm. NYU sociologists tested data from the Panel Study of Income Dynamics - which has been accumulating data on 5,000 households for almost 50 years - to study how a man’s height influences his relationship. They found that short men were 32 percent less likely to leave their partners.\r\n\r\nHead to volix.co.id for more info.\r\n\r\n#VOLIX #CultivateYouthCulture', 3, 3),
(115, 'alpian', '2021-12-31 03:48:46', 'Page 365 of 365 ...\r\nDipenghujung 2021 ,\r\nGw mau berbagi sedikit rejeki buat beberapa orang yg beruntung atau buat yang bener2 butuh..\r\ntinggal jawab pertanyaan gw,\r\n“ hal apa di tahun 2021 yg paling kalian syukuri ? “\r\n\r\nGw akan tunggu jawaban nya di postingan gw ini sampe jam 5 sore ini..\r\n5 orang yg beruntung akan gw DM , dan transfer ..\r\nnominal hadiah nya ga gede kok , tapi cukup lah buat beli batagor pas malam taun baru.. hehe..', 3, 2),
(117, 'alpian', '2021-12-31 03:48:46', 'Yuhuu! H&M End of Season SALE masih berlangsung dan kali ini diskonnya nambah hingga 70% nihhh gengss!\r\n\r\nBuruan deh datangi store H&M terdekat sekarang juga dan belanja deh gais. Jangan lupa mention semua teman kamu juga ya biar belanja bareng.\r\n\r\n#HMIndonesia #Giladiskon #promo #promosi #diskon #infopromo #infodiskon #promogiladiskon\r\n.\r\n.\r\n.\r\nBiar nggak ketinggalan info promo terkini, follow @giladiskonn ya.', 12, 56),
(118, 'alpian222', '2021-12-31 03:48:46', 'Traffic lamp yang baru terpasang di Jl. Jend. Sudirman kota Palembang, tepatnya diseberang International Plaza, merupakan Pelican Crossing, sebab daerah ini sangat ramai pejalan kaki dan penyeberang jalan, diharapkan masyarakat kota Palembang memanfaatkan fasilitas ini untuk keselamatan penyeberangan jalan, di tiangnya ada tombol untouch, jadi saat menyeberang tidak perlu tekan tombol lagi (cukup arahkan tangan anda ke sensor).\r\n\r\nDari: @rambulalulintas\r\n#palembanginformasi', 23, 32),
(119, 'alpian', '2021-12-31 03:48:46', 'Kemarin gue sempet ditanya di tahun ini ada ga si game yang paling menarik atau bakal di inget terus sama gue , dan jawaban gue adalah game litte nightmare. kenapa? karena game ini adalah salah satu game yang paling berkesan buat gue. Game ini bikin gue ngerasa bisa deket sama kalian , dan ngebuat gue selalu bersyukur karena berkat support kalian gue bisa ada di titik sekarang ini 💙 , jadi ga sabar bentar lagi gue bakal nunjukin #EpicFanPower gue untuk gaming lewat sesuatu yg baru, beda dan seru buat kalian semua!\r\n.\r\nStay tuned on 4 Jan 2022, let\'s go big next year!', 33, 54),
(120, 'alpian', '2021-12-31 03:48:46', 'Researchers from New York University conducted a study of 531 short men whose height was under 175 cm. NYU sociologists tested data from the Panel Study of Income Dynamics - which has been accumulating data on 5,000 households for almost 50 years - to study how a man’s height influences his relationship. They found that short men were 32 percent less likely to leave their partners.\r\n\r\nHead to volix.co.id for more info.\r\n\r\n#VOLIX #CultivateYouthCulture', 3, 3),
(121, 'alpian222', '2021-12-31 03:48:46', 'Page 365 of 365 ...\r\nDipenghujung 2021 ,\r\nGw mau berbagi sedikit rejeki buat beberapa orang yg beruntung atau buat yang bener2 butuh..\r\ntinggal jawab pertanyaan gw,\r\n“ hal apa di tahun 2021 yg paling kalian syukuri ? “\r\n\r\nGw akan tunggu jawaban nya di postingan gw ini sampe jam 5 sore ini..\r\n5 orang yg beruntung akan gw DM , dan transfer ..\r\nnominal hadiah nya ga gede kok , tapi cukup lah buat beli batagor pas malam taun baru.. hehe..', 3, 2),
(122, 'alpian', '2021-12-31 03:48:46', 'Mentang-mentang asik belanja dengan alasan healing, nabung & investasi jangan sampe hilang!\r\n\r\nMau mengintai saham-saham baru yang potensial? Sekarang saham yang bakal IPO bisa langsung lo pesen di IPOT EZ. Gak pake ribet, karna sistemnya udah terintegrasi langsung sama BEI. Kece ga tuh? 😎\r\n\r\n#MakeItEZ', 33, 3),
(123, 'alpian', '2021-12-31 03:48:46', 'Yuhuu! H&M End of Season SALE masih berlangsung dan kali ini diskonnya nambah hingga 70% nihhh gengss!\r\n\r\nBuruan deh datangi store H&M terdekat sekarang juga dan belanja deh gais. Jangan lupa mention semua teman kamu juga ya biar belanja bareng.\r\n\r\n#HMIndonesia #Giladiskon #promo #promosi #diskon #infopromo #infodiskon #promogiladiskon\r\n.\r\n.\r\n.\r\nBiar nggak ketinggalan info promo terkini, follow @giladiskonn ya.', 12, 56),
(124, 'alpian222', '2021-12-31 03:48:46', 'Traffic lamp yang baru terpasang di Jl. Jend. Sudirman kota Palembang, tepatnya diseberang International Plaza, merupakan Pelican Crossing, sebab daerah ini sangat ramai pejalan kaki dan penyeberang jalan, diharapkan masyarakat kota Palembang memanfaatkan fasilitas ini untuk keselamatan penyeberangan jalan, di tiangnya ada tombol untouch, jadi saat menyeberang tidak perlu tekan tombol lagi (cukup arahkan tangan anda ke sensor).\r\n\r\nDari: @rambulalulintas\r\n#palembanginformasi', 23, 32),
(132, 'alpian', '0000-00-00 00:00:00', 'alpianmencoba dan pusing sampe akhirnya pusing', 0, 0),
(157, 'root12', '2022-01-01 00:36:14', 'test', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`username`) USING BTREE,
  ADD UNIQUE KEY `email` (`email`) USING HASH,
  ADD KEY `id_username` (`id_username`) USING BTREE;

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id_username` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`username`) REFERENCES `account` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`username`) REFERENCES `account` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
