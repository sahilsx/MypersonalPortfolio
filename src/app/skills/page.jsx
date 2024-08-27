import React from 'react';
import { Typography, Box, Container,Button ,Grid, Card, CardContent, CardMedia } from '@mui/material';

export default function Skills() {
  return (
    <>
      {/* Main Hero Section */}
      

      {/* Skills Section */}
      <Box
        sx={{
          backgroundColor: '#1E1B2E',
          color: '#FFFFFF',
          padding: '50px 20px',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              borderBottom: '2px solid #FFFFFF',
              paddingBottom: '20px',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            <Typography className=" animate__animated animate__tada animate__infinite animate__slower animate__delay-2s " variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
              Skills
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Skill 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
               
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRAoplfD0iAV2Wv8PcA8hJRXZCdFng-4HUg&s"
                  alt="HTML"
                  className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography  className=" animate__animated animate__flip  animate__infinite animate__slower animate__delay-2s "  variant="h5" component="div">
                    HTML
                  </Typography>
                  <Typography  className=" animate__animated animate__fadeIn  animate__infinite animate__slower animate__delay-2s "  variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                    Standard markup language for creating and structuring web content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Skill 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8-1200-80.jpg"
                  alt="CSS"
                   className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography className=" animate__animated animate__flipInX  animate__infinite animate__slower animate__delay-2s " variant="h5" component="div">
                    CSS
                  </Typography>
                  <Typography className=" animate__animated animate__flash  animate__infinite animate__slower animate__delay-2s "  variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                    Stylesheet language for designing the look and layout of websites.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Skill 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200"
                  alt="JavaScript"
                   className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography  className=" animate__animated animate__jello  animate__infinite animate__slower animate__delay-2s " variant="h5" component="div">
                    JavaScript
                  </Typography>
                  <Typography className=" animate__animated animate__fadeIn  animate__infinite animate__slower animate__delay-2s "  variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                    Programming language for interactive and dynamic web content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Additional Skills */}
            {/* Skill 4 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                  alt="React"
                  className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography className=" animate__animated animate__jello  animate__infinite animate__slower animate__delay-2s " variant="h5" component="div">
                    React
                  </Typography>
                  <Typography className=" animate__animated animate__fadeIn  animate__infinite animate__slower animate__delay-2s " variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                    JavaScript library for building reusable user interface components.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Skill 5 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/8c3c2/coverImage.jpg"
                  alt="Node.js"
                  className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography className=" animate__animated animate__flip  animate__infinite animate__slower animate__delay-2s "   variant="h5" component="div">
                    Node.js
                  </Typography>
                  <Typography className=" animate__animated animate__flash   animate__infinite animate__slower animate__delay-2s " variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                    JavaScript runtime built on Chrome's V8 engine for server-side applications.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Skill 6 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="https://images.prismic.io/turing/652ec2a4fbd9a45bcec8194e_Express_js_11zon_0a5a935350.webp?auto=format,compress"
                  alt="Express.js"
                  className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography className=" animate__animated animate__flipInX   animate__infinite animate__slower animate__delay-2s " variant="h5" component="div">
                    Express.js
                  </Typography>
                  <Typography className=" animate__animated animate__fadeIn animate__infinite animate__slower animate__delay-2s " variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                    Web application framework for Node.js, designed for building APIs and web applications.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="https://www.keenesystems.com/hubfs/Pillar/asp.net-development/asp-net-3.jpg"
                  alt="Asp.Net"
                  className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography className=" animate__animated animate__flipInX  animate__infinite animate__slower animate__delay-2s " variant="h5" component="div">
                    Asp.Net
                  </Typography>
                  <Typography className=" animate__animated animate__flash  animate__infinite animate__slower animate__delay-2s " variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                  Microsoft platform for building a variety of applications, cross-platform.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0ARwDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAQIABAUDBgf/xABIEAACAQMCAwYDBQQHBQcFAAABAgMABBEFIRIxUQYTIkFhcRQygRUjUpGxB0JicjOCobKzwfAmQ3WS0SQ1NmRzdPFEU1Vj4f/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAQQFBgD/xAAyEQACAgEDAgMGBQUBAQAAAAAAAQIRAwQSIQUxIkFRExQygeHwFWFxodFCYpGxwTTx/9oADAMBAAIRAxEAPwD0eT1oZNNS1yKO+QN+tLvTUD50YaFOetDeiaBokGiIpY78huasZNc4f3voK6UubtiZu2DJ61MnfepUoAQZPWhk0aFGgkDehk9aNTrUhi71N6lSpCBk9aGaNCiCB9aG/WjQowkRWZGVlO43FaUcgkRXB58x0PSsw10hlMTZ5qfmH+YpWXHvVruIzYt6tdzQ3pd+tNkEBlOQdwaBqiiihN6U5pzS0xDEJvSkmnpSNqYhqE3oHPWmNLTExiFJpTnlXVO6Dfeh+H+A7itCOODhBhC4Pmu5+pO9DPL7PyF5M6xeRliGZtwpA6ttTdwACXblucbAD3Nd7m7t4CV/pJRkcKHYH+JhVFVubw8TnhjU52GFHoo8zTIOclulwhkJZJrdLhB7wMSkAzj5nPIfnSlYlOHOW5kkn/KrLKkKHhGAOXUn1qoSSSTzPOmwe7sPxvfyuxeoUxFDFVishKBHOmxQokw0LSkb09CiDQ0RAJXrg11qvyII513Vgw2+vpQSXNiprmyUD50TQoQQUCKNQ1KJBQ60alGGhaFE0KkJE6UuKahUhAosgCxEsMycXCCCASGCYDHw5ORgZyaBrStXK24UqjxvkPHIoZGwTzB8/Woc1Gt3Yr6jJPHG4dzLIwcHYjYg8xQrWa0s5VRLcd2yKESJ28gMARyHn7Gs6a3lhZlZSCpwQQQw9waYpeZOHVRy8Ph+hIZ2iODuh5jp6irwZWAYHIPI1mU0crxHbdTzXyNKyYt3MQ8uHd4o9zQNLihHIkoyp38weYpjVXlcMp8rhiEUpFOaU0aYxMQ0pFOaRhk46b0xDUxNuWRSSmRY5OBmUsMHhJGRnkcV0b5T9Me+aVhxZXG3In/pTV3GxrzONpbwyOBK3Co5DcBj0LVr8AUcIAAAAAHIYrNwAMAYphNKEaMNswxvuVB54NBljLI7sXmhPLK0/kLO/G5APhXYep8zXEinIpcVYiqVFqC2qkXiKGKalNU0ykhaFNQxzokEmIaFNQNGNTFIqAlTkf8Az70aU0SC79zsrq3QHoaaq2KYSOvqM8jQuHmhbx+h2odaUSoeeR+lPsd6Gmu4LTXcFDrRoedeRKBQ86ahiiCF6VPKjUqQhTWha47iPOcBmzw4zjiPLNUDXSG87r7t0zGCSrL8wzvuKDLFzj4RGohKcKial2YhwxRRIsSjjWTm8gYbOWPl/rypGE4hj+IQTRGPvArEiaKMtwhg3MA+XMelCC5tZlgY4mhjZnQxkHO2RG3pnc//ANoq93Pc96kZlkbPeJyQxkcJUk7AY2o4STlfm+K9P1XmYyjKMdrXbz+vkUZraHhaWGUMu3Er4WVc7DiXkfcGqVaFzEkUs0auHVWIVlORj1I8/I1Qpidumjb0sm4cu0AFlIIJBHIirMd15Sf8w5fUVWIoV6UFLuWZY4z7miCCAQQQeWKBFUFd0OVJH6flXdLkcpBg9V3H5UiWFrsVXhlHtyd6TrTKyMPCQeuDv+VAjr5UC47go5kZx05+9TGBTmlNGmMTEpTTmlNGhiEIpac0MU1DUXKBIzGpODJJHCmeRkkYIo+po1zk/pdM/wCK6b/jCqkFckjNnJxi2jrNFJBLJDJgOhw2Dkcs7GuVbkr2E+p39hLaESCzN4LoOCzcJCMAvMYyMdazhLY2emaRdXNn8S2pCB5Sr8JhScqB3eeZHEBgEZ3NaE9JUntkq+tFHH1C4rdF7uP9WU6FbPw9kNR12J7ZGhtLGxmjjG3jk74thvXhFVgtlqEGgXENt8Ib+8ktpo1YHhWFJWcAgYJ8GAcedT7pJcWr+tDI9Sg+XF16/KyjDDJcPJHFw8cUDXLhjj7pTw5FB4JUhs7g8Jiu4hNCVOSUIBHECPUVsW8unG/1m2hse5ntdPdROGyJYCzAqy+R4gSM5z1rjawR3dv2OtpB939kfESgEgsscVuoUY33LDPt601aVbeHb+on8TksniVR/ftZjOyorOxwq4yfchRXa6tp7SUwzBePhV/AeIYb1wKtailhLp+pMq6dBPbSwCFbK8WfvIu/jH3qhQQ3ljHPzrSv5tP+1rOxnsRK18pjNyGw8bCN5FAXGcYU5IO1T7rVpv0r9xv4pck4xdc38qPOVFcqdvcg+daaRWVlaatfT2wuzb31xZwRu4UcELcJLMQVBOCc46CrKW+mT3fZsRWoS2vtPvrpo5AeLZbdk48nORxn/Qofdm+75/ngfLqeNf0trnn9FZlK4cZHsR0pq7x3Wh/aDxy28NrBFautt8RKUhuJ1kIxNJjhBAAxnPzHnjFPeqA8R+E+GLxKzRiRZIycnxRumxHLyHsKr5NPsi5p8HoatSyrHtaffkqUKJqVWLyFPlUqHyqUQSBSlcgn0P6Uxph8p/lb9DUp12PSdKzJ0Nw9pez8bJ3M6KXXmAUU7jkR9K2kuZFU8R8DKR3sOeBgPKRQcj+0e1ed7LP3mhdopPwXduPzjiq7A8wYmFsNjPCSPF7KedaUtMsit9zDjqoydSNY4YZXBDDw8O4PltiqZBBIIII2IPMe4qRzwyFgSLaVgytkEwsWBHiUkdeo968rcP207HFI9Xg+1tEBCw3sLM5jjJwoWcjiX0VwR0PnS8OilT5Hy6jDTuKatP8AY9TQqppuqaXq0feafcCUqvFLA4CXUPq8WSceoyPWrlKnCUHUka+HPDNHdB2LUo0KHsPuuSAsORweopxNMuMkEfxb/wBtdJ7SeDcjiT8S5/tHOq5qIuM1aAi4ZFa5LAuEPzAr68xXQFWGVII9DVGoCV3BI9qF4k+xDwr+kuGhXFZzycZ9RzrspVhkEGluLj3A2uPcUilINOaWiTJRdIrjMsrCBoigkgube6TvM8DGFw/C3Dvg13pTVROnZQpNUzp8VcDVDqKpEe8tZrWSNuLZXZXDKR6jfbzrnZ3OoWNt8HG1tLBCG+Ca5hZ5bY/ujIYAhfLkfLO1CgQN6sR1ORcpivdcUuGvtHQXt58VqFw4gYX1pb20gCupRoeMBk3Ox4jsfzqqrXSWNpZq6RyWN7Je2lxGpLBmZ3AdWOCPEwbqOldKBovb5G7v77hrS4lxt+6oufa+otxB4rECWKSO4MUcgZyRwqwZmPLfYg8+dUVnv449G7uaNJ9Kha3hkERKSxMqoUmjLciFXOCNxmj0pTTHqMku7JjosC/pO13e3d5aXFr3VlbmfhLvbxNlmVg4J4jyyBmrH21qJlZ3hsSQuIXWJxJESoDYZnOxOT5VQNAjnRe85L7he44Gq2nS0vLyzku+EwzW93KZ54LlCw75scTowP72xIIP0rodU1FrrTrt/hjJZx3UXCsTKkiXHATtxkgjhXG/67VcUCOe1FHPNKkw3osEnuceRre5u7Se4ki7iSO6jEdzb3MZeJwCzAjBBB3IPMH6ValvZr11aRY0ESKkaRDhRVHkAd6o00Zw49QRQynJw23wNemx7vapeIsUKNCqlkIHShTUDyogkLR/db+Vv0NSj5N/K/8AdNSu56Xws812JYv2Y7WsfK9tf8KGtWCJbhIlJIKwsVPPDd4djv8A9PY1jdhv/CXbD/3tr/cirRhmkiSIoQGeCVQeEEjMpOV4tvfyOd81088b9i3HucThk5ZVFFySKUACVTKMFeJNplIHIHkfY7+gqvY6hqWnIxtZUvdPAZZraUFlVDsyvE3iX1xkV1F5JCHklgDJLIGZoivBuoBU7YBGBsRjpiqkUkNyVcs8d0pJWWHKuu5YDI5gct88vmHKnaVSimsq+YGoufw+RWuuy3ZrXZFu+ztz9ha2D3iWxYpaySeXcNHuv9X/AJPOqB17X9BuEsO12nzISSItQt1UmRRtxHg+7cdcEEeeTtWpcx+F3miBcDjW4tQFVzzBni5DP4h+Zr0NrPaXOk6daaoqXUN3bqXS/UyQysGKgGR8gP03B6ZpeuePDFOatNkaSeVSvE6aKunPp+oxtPBdRS23d8SzxSLwqxI2cNgg9QQK6z2s0JPECyjfK55c9xVC07N6V2dv7rUNN757S8t3s7nTrj7ww5dZA8crc12xhgTvzrUiKleKwkBQbtazluFB0Q7uv9o9K5vPUZt43cX/AI+nzOowanUyjvyLjsdFmafjms7gPxeKW1uCeEHGPAd2U/mPTzqu6W8zEBWguOZikABb1XBwR6g0jxwyvlA9tcjfhOzE9VKnhP0NRppABHeRB02KyKOnmMefqKUotfD9f4ZZxYdj3Yn8vvucXjeM+IfUbg/Wk2rWgFtLCoyrqA3E7sSwHkSedZkgVXYLy8qsxfCsu4M/tJODXKOdQEg5BIPpRoUfcudzskwJw2x6+Rrpiqhpg7rsCcUt4/QU8foa1A0xrvb2V5dLxxRjuzsJJG4VOOZHMmqEISm6irMaWSONXJ0ipQxVyfT7y3UyOqtGNy8R4gB1I51U/wCoA9SdgBRSxzg9slQePLDIt0XYuKWrNyNM0q3W71y9SzifPdQ/NcTEb4RFBYnrgH6V56bt72ViYra6Fd3CD/eXMscTH1AJc/pV6GjySVvgqT6jig6XP6GuaBqlZ9r+xOoOsVxFdaTK5wJZSr2wY8uJ0JA+qgetbh0q673hDx/Dd33xu8juBFjPFz5/X1zUy0mSNVyNxdRwyXPH6mdQqnedrexGnu0NvDdatKhw0qFUtiRz4XcgH3CEetV4u3fZOVgt1oV3bJ/9y2ljlI9wCh/WmLRSrlqxb6tjT4i6NMihVy3i03VbdrzQ71LyJcd7CfDcRE52ZGAYHoCo9zVM7Egg5BwQdiD0INInjlidSRpafU486uDFNFfnT3q7a6XqF4gmiRVhYZSSVuEMOqjBOKE2mahaMrzRDuwTl424lHTPI/2UTxT27q4J97w7tm5WJQo0KpIgFSifKhRBIU1PJv5X/umicUDyb+V/7poo90el8LPLdhSG7I9sD/5215+ixVsWKxlPvAndm3ctx4C4E7DJJx+fEP5hyOJ2EP8Asd2zGRkXlrkZ3GRHjIq/DFNJHAI0LkQytwrguwErbonM488ZPtXWzhuwSV0cLh5zRV0anw6AXPwwEci4t3LKrcJXBXAJAwc43Azn97nSWFrAuo2UsfgZJJQypjgLd26kAeRG+w6fKKqJ8QEZrd5oSixyv3nCI27wcGVlOwzyYHblk1xt55o3W2dWjcfLzV1/eBG+fL1FD7Kawzi3aa+7GY4LJmSunf392egkS2mkClGtLsklY2xwSHzaJkwpz58JB6jryWa5s17ieFJLTdQoC4VSclR4QuPQqKRL5nTuryNZ4jjLEAsMeZXkffnXcE4BhkE8BwCkpJZRy2Y7/Qj61zUp5FBYsnMV98P/AIzpceijhyOU4p3wSMrw5spQ0Qxm3lJwg6IT4l/tHtS9wJ24o45I5gTsuzA+hXamm0xkiW6hYKSgkKpkcCseEGuMF6yOouASueFymzFTsRUrHJO0WYNbXLA7C1xJHgXIDKrACRR4lJ23Xr7VYlkglSQxyFoyqCMSDxZAC8W3hG3+ts1R1SWM2d5OvyrLahT54Zyoz60kALQW0ikjvIYnOPMMoNTtSVoKKhkml2aGCshypwfTz9xQJYnJ513wK5Pzr0ZX3NGMrYlSjQpg1AoU1DFeCNfhM09haA8JvLkQlgSCIlRppOE9SFIHv6V4Htnrt/qWq3em27umnWFx9n2tnExSKWWNhCXkAwCS2QudgPck++4xb6hoM8hxEl+YnbyU3FvLChP1IH1r5b2ns5rDX9et5VILXs9zEeXFDcsZkZSPf8welH0+vZNr1OG1zbyJP0Pe9lezvabs7rkVrNdJcabc6ZPPqCQ98LaKbiVI1Al8PHnOCMZAORtvb1vW9P7KoxIiutblVjaWmSYrSNs4lnI3/QnkMDLDxkf7Qu2CWa2ouLZnChFu5LcNdAAYyST3ZPqUry00088ss08sks0rmSWWVmd5GPNmZtya0ZqEmnXKKMXNWr4Z1vr++1K6mvL6d57mU+KSQ8h5KijYKPIAAVWoEgAkkADck7AfWtnR+zPaPXeFtPsm+GP/ANZdEwWoHVXILN/VU15Js9aRj1q/b+s/Yg0D4g/Z4nMuMt3ndY2tuLP9GD4gMenLavYWvYPs/aDOratdXs4GWt9IQRRBvwmU5Y/8y+1Wz2a/Z+NvsfXCOH5heMTn2+J/yoXkhHhySGrDkmrjFv5Hy81K+g3HYrszekJpGtT2V0w8FnrMZIZtvCjsFb8mevLav2a7RaHxNqFi4twcC7tyZrU+pdRlf6yrUpWrXKFu4upKmULC/v8ATLqK9sLh4LmL5XTky53R1OxU+YP/AMfUdO1ay7YWkiRd1Z69Gi/FW5YiO4i4lDywNzxjI6jODkYY/JcggEbg8iNwaeGae3lhnglkinhcSRSxMUkjccmVhvUNKS2y5QUJyg90HTPqHajs92l7Ra5cWsE8dvptjpltNp8c3eiCeRiyOqiPwhgRhic4HDtg5rzHYzXdQ0zWLHTZZJJNO1C4Fhc2srFkjmkPdpJGDnBDYDY5g+gIMn7Qe18tm1oZ7ZGZCj3cUAS6IIwSGDd2D6hB6YNZXZizmvu0XZ+3hUkpfwXkxGcJBaOJ3Zj9APcimtpvwiUmk7PqV1CILm4hHyxyEL/KdxXGrV+4kvbtlOR3hUHrwgL/AJVVrm8qSm0u1nYYG3ji5d6QKFMAzMEQMzt8qqCWPsBWlbaS7Ye5PCo3MaMMgD8bjYD2/OmYcE8zqCBzanHgVzf8mbFFNO/BChdvPGwX1YnYVrW+kxRgSXLhzxKoUHgiDE4C5JBJPLy9qytT7WaJpMZisIhesjFJDaFfhLZuWZpAck5xsOf4hXib/UL/AFlfjNZuTNpsMr9y9jxRCNwA3dRQY4BjbiZ8EZ2ck4PQabpsYcz5Zzup6rky+HH4UbOs/s8mgluL/speSWVy/H3thLIRBKpPEY45TyH8Lgj1GK8murXVhcmw16zl0++iIPGyMqHfAfA3A6MpI9q9TpvarWdMhje9C3umMqrawxpL8XHGMKGMs33gXpx8XEeRxvXrZB2X7V2htbqKK54U42tboCO+syw58KnvEPXB9+laFSx9jKu+54+HUkmRRdhbiGUZE8ZVnI/EcHhf8wf4qvxNDcKrgBlR2wTjKcwDsMrn6f1qxNT7CdodDaS67NXL31lkvJp84BuFA/Cuyv7jhb0POs3TNetpLkRT8djfIzxvHOSg4xkFQzYweoYfnXouG1pcEptSTPWvC654dxnGORB/19fSgjMpDKxVvMj9CKEV6pwky8JxjiA8P9ZRy+gI9K6yBGKtxFeMDhdt4n9mBOD/AK25Vl5cHHY6HTdRa4Zci1KQRSQSKp4kMav4vArHJwucVnlgWbfI4mx+dQhlbDDBwDvyIPmD0qr3o4mB2wT+tKxYHJsZqNVCCUsapt8j6uyx9ndVmJxi802PPLnI1XNPPFpulP8AisLVs9cxg1mdoW/2M1hhz+1dNH0Dg1d0dj9jaD0+y7H/AAVpWpxbcd/me0Wd5tU2/T+C5mkbmTTA0rc/yqhHhnSx7i0KNCmjAUKNSpCNmeGO5hlglBMcq8LYOGG+QVPkQQCD6Vm6nZ6ZrFvDa9o45kuLZTHZ63ZLk8B5C5QA49QVKnmCpO2vQ9aytPqZ4HcTl8uGOVVI8HJ+z6dzxWHaPQ7mE/IZnaF8eojZxnrTQ/s8ueL/ALZ2j0aFARxfCh7iQZ22Dsm/0r2zQwMctDEx6tGhP9oorHGmeBEXP4FVf7taX4p/YVPcf7jK07sv2O0spKlrNqt4mGSfVMdwrdY4OEJt5eA+9bFxcXdyOGSXEfIRRjgiAG2OEbn6k1zZlUZZgP5iB+Vc0mjlZhHlgvNsHhz0BNVsmsz5V6L8i5h0cMfiq/zYhRhtjYdKUgjyP5VZoVVU2XlMpyRxyoUlRXQ80dQyn6Hamt59SsRw2dwTCRg2l5xz2xG+QpJ7xfo2PSrJoYpsM0oO48ETUMq2zVoxL7Q+xuqcclzZXehXjElp9PUS2Lt1KopT80Q+tY0n7PpnPFp/aTQ7mI54TMzQv9e7ZxXs/wDW1I8UL7vFGx/iRT+oq/DqMq8aszJ9Og3cJUePh/Z5e8Q+N7QaLBGN2+HL3EuP4VcoK9fpen6F2dt5odIWaa7uAFudQuv6Z1G/CmwwB5AKB57moqRp8iIv8iqv6CiSQDtnzx1r09fKS2wVBY+nRi903dAO1XINOuJsGXMMfqPvG9lPL6/lVjSn0e5RpbOVZpotpxKOG4t281eFvEv5fU1qVd03TV8WZ/IranqjXgwqvzOMFvb268MSAZ+Zju7fzMd6x+0Wka1qkcK2Gry2scYPe2gVBHceeS4wcnlhsr6dd6pW1CKhSijCnJzdydnxm5sms7hheRSaHKnhTjPe9+owrlIY8DHVl8Hljq0h4ZEvbiM25WJfs+aactbXPBjdYbdRlfPCAIPMHkfq+ow6TPAsepRQTRcXeQxyoJJOMcmhX5sjqMe9eCvNCmhe4m0kyXzzycbWmstHK7AYK90rHuZH6cTBh5A86sRlYBiKZY5obhQx1W6+/gvLWOWS04CDl0OQpPVgpVcY4dsgxqbeVBasLW6Us0msWyqtqqkhSYnVvCvPJUhm/BjauImLPexnvUvp37i6tdWmkFt5AA97jxA7jvD4cbEkZHVY0LPZQM0Cwxie/t1t/uJpEGAxnvD5j5GkwBnw+XEZ49XpfbK4i4Y9WiaWyQCMaqGhEksmOIZhh8LMdvCviA3Oeda+paF2T7YWqXhEUxdSkGpWDBbhSNuB2xvjzV129K+eO8aZadVs4lCtBpU0kYt542OeJywJCHG7OMtnZ/Md4Ly/067FxHPLbaxJwRRWJmfuBG4yiOoHDvnwRk4HMt5UqWNPsSnRNQ0Ptf2V4pEH2to0eSZIlfvIEH44xl09xxL7eXXTdbtL1StrOVkdcSW8uA59l+VsdR/ZXrtL7YQPPFp2rx/D6kobvZbWOVrReHzdj4l/ibBT+LzrnrnYXs/rY+NsmSwvZB3sd1YhWtpydw8kUZ4Tn8SkH35VWcXHuMTMdJRsCfSqxJ4nP8TfrWPentV2YkWLXLNrizLBIdQt24429O9xjPowU7Vdtr21u1aS2mWVATxAbOhzydTuKZhjFu0enJtUy5rrf7C60x3xrNj+Q4DWho+PsbQv+F2H+CtZuuEHsFrZH/5my/SOtHR/+59B/wCF2P8AhCs/XqoP9TX6N/6Pk/8AhcoHNGpWIdohalGhRJhANCmPOhREm8aUlRzIoMWNcJGRFLOwVRzJP6edYkYN8GBGN8DNOo5Ak/kKrTXTLsW4SeSpzP8AnVaW7Zzwwqd9uIjxH+UU0Vvw+KTd+fXHuTV+OFQVzNCOCMFcxQssrDiB3OAu5Jz1NaUUaxIqjy5nHM0kEeMueZHh9q70nNk3eFdhGbJu8K7ANCjQpCFIBoHzo0D50RIKB86NSiCQtAjO1NQ61IVmVeWDNKl1E0sdzF/RXVo5juoh04l5jqDkHpVuy7T3triLWYviIRsNQsYj3ijlm6tV392TP8oqzVea2ilyccL+Tr19RV3T6zLgfDtej/4JzaTBqVWRU/VHqILqyubdLu3uYJbVxlZ4pFaIj+YHn1HOqVxqZGUtQP8A1ZB/cQ7fU/l515IWN3ZzS3FjO9pK+8jRKsltc+lzbP4G98A9DVqLVrfKx6lGmnTMwVZ1Z30qdj0mbxxk9H2/irotJrsGoe26l6M5rWdOzablcx9UaDFmZnZmZ2+ZnJZm92O9AgEEEAgjBB3BHqDTOjxsFdSCVDLyIZTyZGGxHqDS1seXBklS+06w1FFS9h73hXgimVuC7hXpHPgkqPwsGHtXmL7QtWsoWSINqulRsJDEgdLu28smGMl16cScS9R5V7KpkqVYEqynKspKsp6hhuKjb6Epng0IjaIp3TrEri20uGOFr23Zs54JBxYccyVLP1RfJU7+NFt4mD3FwJBcR39zw3luMlmSLuRxKW8wCXPIpg4b3U/ZuHVEuJ1T7PvZV2v7aNElmI8pYgBkHzIKE9TXmbvRNW0+cxXa2tta/dxHtBcXKqwWR+BcyBeIZ/BwA9ZMDNBuQZlRqs0MttZMXsIinxfxUc/xDSDYLEEI3yTwIvCfNl2zV/StV1DTPvtMleHTElbGn3EQea7fPiCGRgGYY8bqRw8uA8jNT0e9sTarqMS3Olwq7x6mLtnEyMf3EgycZ/d4c9ZRnIzWkhlV7q67u+4UEcIhgCm1jTCo1wrnBUD5VIcb/P5H3DR4+jad2l0XVoVt7+OOxuLpeBrHUmieKdWxy7zbB8g6qT5A8zg63+ze3aRr7s1cHTb0EubWR3Fq55kRvgumehyP5RXm4TLdOO4SfVdRuSCstvDELm0BPMpIGJY/ibwjkrDmPonZrTe0enQuuq6l8REV+4tCvevb75LPcOS3oVBKjqaTPGlygrZ8t1fV9ZstC1PsxrmlTW19PeW95FcbLHKI2AbYeAjA2ZCRXrNDctpOjA+Wn2YH0jArX7Q63oGoW8+lx2cGsMxZHdsfA2rkYLi5G5cdIz5fMKzNOjSKKOGJSIYI0ijG5AVBwgZNY/UMqSWO+TpuiaXJueoaqNV/8NClpqFZR06BQo0KlMIFCjUxRWSXrnUIUykGJXH73+7H+ZrOHxF1J4izufyUfoBTW9s0zhFKjbJJ8gOg8614reOBAqDf95j8zHqarSlj062x5ZSlLFpVthzIrw2yQqD8znm3T0WuipxsB5eddSOdOqhR6+dU5ZG+WU5ZW+X3JgDlQomhShSJS4pqFSEgUD50TQokEgUKNQ0SCFoY501A+dEEhalGhUhDxgeL2A3rhPZRSBuEKOIEMhGY2B8iDXeP5sdR+ldKVNW+QNzjLg8+kWo6V4LF0FsWLHTrzjexY+ZgZTxxt6qcfwmr9rqFleSLbqJLS+bcWN6yB5T5m0nGI5B6DB9KvuisCrKCp5g1m3mmQ3EbxmNJY2IJimAIyORU9ehrV0vVc2Dwz8S/cz9R07BqOY+GX7fQ04bS6mYqsbLwnhdpQUCnzByM59MVq29hbwYZh3ko/ecbA/wryrydrqeu6SRHxPqNku3w15Jw3sK9Le6f5h0V/wDmFeo03V9L1ZX+DmzNEMz20ymK7g/9SFvFj1GR610uHW49TG8bOez6PLpnWRfPyL9Kyq6OjqrI6lHVlDK6nYqwOxFNUppXPMaj2UtZSJ9P4UeFR3FjcSSpYqQV2he3xNECAQQjcJzuvWo/YrT75rS9WO50O5Zi13Z2M8U8Y3IxBIBhSeoGN/lzXpNR1XS9JjSS+uAjSZEEMYMlzcN0hhTxn3xgdRXk77XNc1PMcPeaXZNtwQuG1KZSf95MuVQHomT/ABUrLqYYFc3X+yzptJl1T24o3+fl/k1pb7sz2ZWSysLZZL5/G9pYKjXLsf37yY+FR55Y+ynlXn7y71jWiY76QLbNy06wZ1tyP/MynDv9cL6V1tNLSJAgQQxZ4iqj7xyebOx3yfMkk1opFHEMRqAPPqfc86wc/UsmV1j8K/c6jS9L0+n8WXxy/ZfyZ8OmxqqiTAVQAsUYCqo6bVc7vhACgBRyCjb8q7Ggc1Qi6Nd5ZS7nHBoV2pSB0pm4lSOVCuvCOlLwiisPcJQp8CpRWFZp21okA4jhpSN2xyz5LVggUaFYjk5O2c/KTk7YuKlGh1qbJBQPOjUqQhalGhUkoBFA+dGgfOiDQKB86NSiQQtCianWiJQpoU1CpCRFOGX3rtXCu4OQp6ign6gzXmSlp6U0KBRykhjlGHGfXzHsayrvSw7RyrxiWAkwXEDtFdwHrHIni/y9K2aBpkZOL3QdP1Qala2yVr8yjZ9o9UscR6pE+oWw2F3aRqt7GP8A99uMI3uuD6Ghe9ptRuwY9JgeyhOzX2oRD4g/+2tCSB/M5/q13mtopdyOF/xLsfrSR2cMZ4jl2zkFsYHstaa6pqFDbSv1+hUXTNI573den1Mu205jJJcEyPPN/T3l27S3E2OrtvjoBgVqRW0MO6jLebNzrvigaoOTm903bNJSSWyCpeiFoUd6G9EQDFA0aBo0MQtCmoVIaFoYpqFEgkxSKFE0KMI3MCpgVKlYqMEBAoEDepUogkDAoYFSpRIImBQwKlSpJAQKGBUqUQaAQKGBUqUSCBgUMDepUogkTAoECpUqSUDArrEBwn3qVKGfwkZPhGIFAgVKlAhaBgUCBUqUSCQuBQIGKlSjQSBgUpAqVKJDEDAoECpUokGgYFLgVKlGgkTAoYFSpRBIGBS4FSpRINAwKGBUqUYw/9k="
                  alt="Node.js"
                  className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography className=" animate__animated animate__jello  animate__infinite animate__slower animate__delay-2s " variant="h5" component="div">
                    Handlebars
                  </Typography>
                  <Typography className=" animate__animated animate__fadeIn  animate__infinite animate__slower animate__delay-2s " variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                  Handlebars is a JavaScript library that helps you generate HTML  based on templates and data.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="https://www.bleepstatic.com/content/hl-images/2022/05/18/MSSQL.jpg"
                  alt="Ms Sql"
                  className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography className=" animate__animated animate__flip  animate__infinite animate__slower animate__delay-2s " variant="h5" component="div">
                    MSsQL
                  </Typography>
                  <Typography className=" animate__animated animate__flash   animate__infinite animate__slower animate__delay-2s " variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                  Microsoft’s relational database management system for data storage and management.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="data:image/jpeg;base64,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"
                  alt="MongoDb"
                  className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography className=" animate__animated animate__jello  animate__infinite animate__slower animate__delay-2s " variant="h5" component="div">
                  MongoDb
                  </Typography>
                  <Typography className=" animate__animated animate__fadeIn  animate__infinite animate__slower animate__delay-2s " variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                 NoSQL database designed to handle large volumes of data with high performance and scalability
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="data:image/jpeg;base64,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"
                  alt="Tailwind Css"
                  className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography className=" animate__animated animate__flip  animate__infinite animate__slower animate__delay-2s " variant="h5" component="div">
                  Tailwind Css
                  </Typography>
                  <Typography className=" animate__animated animate__flash   animate__infinite animate__slower animate__delay-2s " variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                
 CSS framework designed to make building custom user interfaces faster and more efficient.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#2A2D3E',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="https://th.bing.com/th/id/OIP.1F3ZEuc5n0erz0dhhB5nYQHaDt?w=960&h=480&rs=1&pid=ImgDetMain"
                  alt="Material Ui"
                  className=" animate__animated animate__pulse  animate__infinite animate__slower animate__delay-2s "
                />
                <CardContent>
                  <Typography className=" animate__animated animate__flipInX animate__infinite animate__slower animate__delay-2s " variant="h5" component="div">
                    Material Ui
                  </Typography>
                  <Typography className=" animate__animated animate__fadeIn  animate__infinite animate__slower animate__delay-2s " variant="body2" color="text.secondary" sx={{ color: '#FFFFFF' }}>
                  React UI framework that implements Google's Material Design system.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
