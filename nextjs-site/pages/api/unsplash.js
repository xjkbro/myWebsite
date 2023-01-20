export default async function unsplash(req, res) {
    const accessToken = process.env.UNSPLASH_ACCESS_TOKEN;
    const response = await fetch(
      `https://api.unsplash.com/users/jkdelara/statistics?client_id=${accessToken}`,
      {
        method: 'GET'
      }
    );
  
    const unsplashdata = await response.json();
  
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=1200, stale-while-revalidate=600'
    );

  
    return res.status(200).json({
      downloads: unsplashdata.downloads.total,
      views: unsplashdata.views.total
    });
  }