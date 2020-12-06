document.addEventListener("DOMContentLoaded", () => {
  const dKeyframesLarge = [
    {
      d:
        "M0,358 C220,350,440,542,660,550 C880,552,1100,360,1320,358 L1320,0 L0,0"
    },
    {
      d:
        "M0,450 C220,540,440,540,660,450 C880,360,1100,360,1320,450 L1320,0 L0,0"
    }
  ];
  const dKeyframesSmall = [
    {
      d:
        "M0,1158 C220,1200,440,1392,660,1450 C880,1502,1100,1310,1320,1158 L1320,0 L0,0"
    },
    {
      d:
        "M0,1350 C220,1500,440,1500,660,1350 C880,1220,1100,1220,1320,1350 L1320,0 L0,0"
    }
  ];
  const animeTimeline = anime.timeline({
    direction: "alternate",
    duration: 3000,
    loop: true
  });
  animeTimeline
    .add(
      {
        targets: ".cyan-wave-lg",
        keyframes: dKeyframesLarge,
        easing: "easeOutQuart"
      },
      0
    )
    .add(
      {
        targets: ".blue-wave-lg",
        keyframes: dKeyframesLarge,
        easing: "easeInQuint"
      },
      0
    )
    .add(
      {
        targets: ".purple-wave-lg",
        keyframes: dKeyframesLarge,
        easing: "easeInQuad"
      },
      0
    );
  animeTimeline
    .add(
      {
        targets: ".cyan-wave-sm",
        keyframes: dKeyframesSmall,
        easing: "easeOutQuart"
      },
      0
    )
    .add(
      {
        targets: ".blue-wave-sm",
        keyframes: dKeyframesSmall,
        easing: "easeInQuint"
      },
      0
    )
    .add(
      {
        targets: ".purple-wave-sm",
        keyframes: dKeyframesSmall,
        easing: "easeInQuad"
      },
      0
    );
});
