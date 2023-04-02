#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

#Get base SDK Image from Microsoft
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app
COPY ["JwtAuthenticationManager/JwtAuthenticationManager.csproj", "JwtAuthenticationManager/"]

#Copy the CSPROJ file and restore any dependencies (via NUGET)
COPY Zoollar.Blogs.API/*.sln Zoollar.Blogs.API/
COPY Zoollar.Blogs.API/Zoollar.Blogs.API.csproj ./Zoollar.Blogs.API
#RUN dotnet restore "Zoollar.Blogs.API/Zoollar.Blogs.API.csproj"
RUN dotnet restore Zoollar.Blogs.API.csproj

#Copy the project files and build our release
COPY . ./
RUN dotnet publish -c Release -o out

#Generate runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "Zoollar.Blogs.API/Zoollar.Blogs.API.dll"]