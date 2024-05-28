<div align="center">
  <img src="https://user-images.githubusercontent.com/29287377/170220154-a521b32b-6727-422b-bf69-01b4faaa31da.png" />
</div>

<br />

<div align="center" markdown="1">

  [![다운로드](https://img.shields.io/github/package-json/v/MaccolSolZico/loa-details-kr/main?style=for-the-badge&label=%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C)](https://github.com/MaccolSolZico/loa-details-kr/releases/latest)
  ![주간 사용자](https://img.shields.io/endpoint?url=https%3A%2F%2Fla.herysia.com%2Fbadge&style=for-the-badge&label=%EC%A3%BC%EA%B0%84%20%EC%82%AC%EC%9A%A9%EC%9E%90)
  [![디스코드](https://img.shields.io/discord/1240116892228780073?color=%235865F2&label=%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C&style=for-the-badge)](https://discord.gg/ybujC3sjMy)
  <br />
  ![라이센스](https://img.shields.io/github/license/MaccolSolZico/loa-details-kr?style=flat-square)

</div>

<div align="center">로스트아크 실시간 딜 미터기</div>

<br />

![소개 이미지](https://user-images.githubusercontent.com/29287377/173195460-cf8da1b4-abfa-4ed3-8dec-648eb1ffaf87.png)

---

# Requirements

- For windows, you need [Npcap with WinPcap compatibilities](https://npcap.com/#download)
- For Unix, you need `libpcap` and `libpcap-dev/libpcap-devel` packages

### When installing Npcap for Windows:

- You must tick the case `Install Npcap in WinPcap API-compatible Mode`
- If you don't want to run loa-details as administrator every time, you should NOT TICK the case `Restrict Npcap driver's access to Administrators only`

![npcap-install](./public/npcap.png)

## User Instructions

- Make you that you have installed the requirements
- Download latest release installer [here](https://github.com/MaccolSolZico/loa-details-kr/releases/latest)
- Follow the installation instructions
- Start loa-details and start logging !

## Dev

- Clone with `git clone --recurse-submodules https://github.com/MaccolSolZico/loa-details-kr`
- Install dependencies with `npm install`
- You can run loa-details in dev mode with the command `npm run dev`
- You can build a release-ready binary with the command `npm run build`. Output will be located in `./dist/electron` directory.

---

# Credits

This repository is a clone of the [original interface](https://github.com/karaeren/loa-details) from [@karaeren](https://github.com/karaeren).
It has been modified to work as a standalone program, without the need of any 3rd party logger.

The packet sniffing part has been made from scratch by [@Herysia](https://github.com/Herysia) and [@Mathicha](https://github.com/Mathicha), however, we can't help but thank [@Shalzuth](https://github.com/Shalzuth) for his work on [LostArkLogger](https://github.com/shalzuth/LostArkLogger).
