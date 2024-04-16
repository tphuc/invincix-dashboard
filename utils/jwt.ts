import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1d",
};

export function signJwt(
  payload: JwtPayload,
  option: SignOption = DEFAULT_SIGN_OPTION
) {
  const secretKey = process.env.JWT_USER_ID_SECRET!;
  const token = jwt.sign(payload, secretKey);
  return token;
}

export function verifyJwt(token: string) {
  try {
    const secretKey = process.env.JWT_USER_ID_SECRET!;
    const decoded = jwt.verify(token, secretKey);
    return decoded as JwtPayload;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export function generateAccessToken(user) {
  return jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, process.env.JWT_USER_ID_SECRET, {
    expiresIn: '30d',
  });
}

function generateRefreshToken(user, jti) {
  return jwt.sign({
    userId: user.id,
    jti
  },
    process.env.JWT_USER_ID_SECRET, {
    expiresIn: '30d',
  });
}


export function generateTokens(user, jti) {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user, jti);

  return {
    accessToken,
    refreshToken,
  };
}



const verifyJWT = (accessToken: string, secretKey: any) => new Promise((resolve, reject) => {
  jwt.verify(accessToken, secretKey, (err, decoded) => {

    if (err) {
      reject(err)
    }
    resolve(decoded);
  });
})

export async function getUserSession(req: any) {

  let accessToken = req.headers?.get('authorization')?.split(' ')?.[1]

  const secretKey = process.env.JWT_USER_ID_SECRET!;


  try {
    let data = await verifyJWT(accessToken, secretKey)

    return data
  }
  catch (e) {
    console.log(78,e)
    return null
  }
}

export async function isAdmin(req: any) {

  let user = await getUserSession(req) as any
  return !!user?.isAdmin
}